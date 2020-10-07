const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user._id);

    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    };

    res.cookie('jwt', token, cookieOptions);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

// Sign up
exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

    // Delete password
    newUser.password = undefined;

    // Send json web token
    createSendToken(newUser, 201, req, res);
});

// Log In
exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // Check if user and password exist
    if (!email || !password)
        return next(new AppError('Please provide email and password!', 400));

    // Check if there is user
    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return next(
            new AppError('There is no user with given credentials'),
            401
        );

    // Check if credentials are correct
    const correct = await user.correctPassword(password, user.password);

    if (!correct) return next(new AppError('Incorrect email or password'), 401);

    // Delete password
    user.password = undefined;

    // Send json web token
    createSendToken(user, 201, req, res);
});

// isLogin
exports.isLogin = catchAsync(async (req, res, next) => {
    let token;
    // Getting token from headers or cookies
    // Development
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    // Production
    /*
    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    */

    if (!token)
        return next(
            new AppError(
                'You are not logged in! Please log in to get access.',
                401
            )
        );
    // Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user)
        return next(
            new AppError(
                'The user belonging to this token does no longer exist.',
                401
            )
        );
    // Check if user changed password after token was issued
    if (user.changedPasswordAfter(decoded.iat))
        return next(
            new AppError(
                'User recently changed password! Please log in again.',
                401
            )
        );

    res.status(200).json({
        status: 'success',
        data: {
            user,
        },
    });
});

// Protect
exports.protect = catchAsync(async (req, res, next) => {
    let token;
    // Getting token from headers or cookies
    // Development
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }
    // Production
    /*
    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    */

    if (!token)
        return next(
            new AppError(
                'You are not logged in! Please log in to get access.',
                401
            )
        );
    // Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user)
        return next(
            new AppError(
                'The user belonging to this token does no longer exist.',
                401
            )
        );
    // Check if user changed password after token was issued
    if (user.changedPasswordAfter(decoded.iat))
        return next(
            new AppError(
                'User recently changed password! Please log in again.',
                401
            )
        );

    req.user = user;
    // Grant access to protected route
    next();
});

// Restrict To
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError(
                    'You do not have permission to perform this action.',
                    403
                )
            );
        }
        next();
    };
};

// Forget Password
exports.forgetPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on posted email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new AppError('There is no user with email address.', 404));
    }
    // 2) Generate random token
    const resetToken = user.createPasswordResetToken();
    // Remove validate and save reset token and reset expires
    await user.save({ validateBeforeSave: false });

    // 3) Send it to email
    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/users/resetPassword/${resetToken}`;

    const message = `Forget your password? Submit a PATCH request with your new password and password confirm to reset url : ${resetURL}.\n If you didn't forget your password, please ignore this email!`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your Password Reset Token(Only valid for 10 min) ',
            message,
        });
        res.status(200).json({
            status: 'success',
            message: 'Token sent to email!',
        });
    } catch (err) {
        // In case of error, remove all the properties related to reset functionality
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        // Remove validate and remove reset token and reset expires
        await user.save({ validateBeforeSave: false });

        return next(
            new AppError(
                'There was an error  sending the email. Try again later',
                500
            )
        );
    }
});

// Reset Password
exports.resetPassword = (req, res, next) => {};
