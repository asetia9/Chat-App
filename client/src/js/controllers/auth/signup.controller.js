// State
import state from '../../state';
// Utils
import { elementStrings, mode } from '../../utils/base.util';
// Controllers
import * as formController from './form.controller';
import * as alertsController from '../alerts/alerts.controller';
import * as combinedController from '../combined.controller';
// Models
import Setting from '../../models/Setting';
import Signup from '../../models/Signup';
// Views
import * as signupView from '../../views/auth/signup.view';
import * as formView from '../../views/auth/form.view';

export const controlTogglePassword = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.signup.toggle.password,
        elementStrings.forms.signup.elements.password,
        signupView.togglePassword
    );

export const controlTogglePasswordConfirm = event =>
    formController.controlToggle(
        event,
        elementStrings.forms.signup.toggle.passwordConfirm,
        elementStrings.forms.signup.elements.passwordConfirm,
        signupView.togglePasswordConfirm
    );

// Form
export const controlSignup = async event => {
    event.preventDefault();

    console.log('Sign up');
    // 0) Prepare UI for changes
    signupView.prepareUIForSignup();

    // 1) Getting user inputs
    const inputs = signupView.getUserInput();
    // 2) Checking user inputs
    // { name, email, password, passwordConfirm }

    // 3) Init signup
    if (!state['signup']) state['signup'] = new Signup({ ...inputs });
    state['signup'].setUserInput({ ...inputs });

    try {
        // 4) Making API call
        const data = await state['signup'].signupUser();
        switch (data.status) {
            case 'success':
                {
                    // !For Development
                    // Token Assign
                    state['token'] = data.token;
                    // Getting User
                    const { user } = data.data;
                    // User Assign
                    state['user'] = user;

                    // 5) Success Alert
                    alertsController.controlAlerts({ mode: mode.alert.signup.success });
                    // 6) Clear form
                    formView.clearForm();

                    // Combined Empty
                    combinedController.controlAll({ mode: mode.combined.empty });
                }
                break;
            case 'error':
            case 'fail':
                {
                    console.log('ERROR : ', data.error);

                    // 0) Better Alerts
                    alertsController.controlBetterAlerts({ data: data.message });
                    // 1) Initial UI
                    signupView.initialUIForSignup();
                }
                break;
        }

        // Clear signup
        state['signup'] = null;
    } catch (err) {
        console.log('ERROR', err.message);
        // 0) Error Alert
        alertsController.controlAlerts({ mode: mode.alert.signup.failure });

        // 1) Initial UI
        signupView.initialUIForSignup();

        // State Changes
        state['token'] = null;
        state['user'] = null;
        state['signup'] = null;
    }
};

// ! For Development
window.controlSignup = controlSignup;
