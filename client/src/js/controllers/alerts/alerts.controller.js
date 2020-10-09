import state from '../../state';
// Utils
import { mode } from '../../utils/base.util';
// Models
import Alert from '../../models/Alert';
// Views
import * as alertsView from '../../views/alerts/alerts.view';

export const controlAlerts = info => {
    // Init Alert
    if (!state['alert']) state['alert'] = new Alert(info);
    state['alert'].setMode(info.mode);

    // Prepare UI
    alertsView.clearAlerts();

    switch (info.mode) {
        case mode.alert.misc.success:
            miscSuccess(info);
            break;
        case mode.alert.misc.failure:
            miscFailure(info);
            break;
        case mode.alert.login.success:
            loginSuccess();
            break;
        case mode.alert.login.failure:
            loginFailure();
            break;
        case mode.alert.signup.success:
            signupSuccess();
            break;
        case mode.alert.signup.failure:
            signupFailure();
            break;
        case mode.alert.forget.success:
            forgetSuccess();
            break;
        case mode.alert.forget.failure:
            forgetFailure();
            break;
        case mode.alert.reset.success:
            resetSuccess();
            break;
        case mode.alert.reset.failure:
            resetFailure();
            break;
        case mode.alert.update.profile.success:
            updateProfileSuccess();
            break;
        case mode.alert.update.profile.failure:
            updateProfileFailure();
            break;
        case mode.alert.logout.success:
            logoutSuccess();
            break;
        case mode.alert.request.sent.success:
            requestSentSuccess();
            break;
        case mode.alert.request.sent.failure:
            requestSentFailure();
            break;
        case mode.alert.request.received.success:
            requestReceivedSuccess();
            break;
    }

    // Clearing UI after timeout
    state['alert'].setTimer(alertsView.clearAlerts);
    // Clearing data after timeout
    state['alert'].setTimer(() => (state['alert'] = null));
};

// ! For Development
window.controlAlerts = controlAlerts;

const miscSuccess = ({ data }) => {
    const miscData = {
        text: data,
        type: 'success',
    };
    alertsView.renderAlerts(miscData);
};

const miscFailure = ({ data }) => {
    const miscData = {
        text: data,
        type: 'failure',
    };
    alertsView.renderAlerts(miscData);
};

const loginSuccess = () => {
    // Getting email from state['login']
    const { email } = state['login'];
    const data = {
        text: `Logged in successfully as ${email}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const loginFailure = () => {
    const data = {
        text: 'There was problem in logging in.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const signupSuccess = () => {
    // Getting name from state['signup']
    const { name } = state['signup'];
    const data = {
        text: `You have been successfully registered as ${name}`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const signupFailure = () => {
    const data = {
        text: 'There was problem in signing up.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const forgetSuccess = () => {
    // Getting email from state['forget']
    const { email } = state['forget'];
    const data = {
        text: `The token has been sent to ${email}.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const forgetFailure = () => {
    const data = {
        text: 'There was problem while sending token.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const resetSuccess = () => {
    const data = {
        text: `Your password has been reset.`,
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const resetFailure = () => {
    const data = {
        text: 'There was problem while reseting your password.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const updateProfileSuccess = () => {
    const data = {
        text: 'Your profile has been updated successfully.',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const updateProfileFailure = () => {
    const data = {
        text: 'There was error while updating your profile.',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const logoutSuccess = () => {
    const data = {
        text: 'Logged out successfully.',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};

const requestSentSuccess = () => {
    const data = {
        text: 'You request has been sent successfully to xyz',
        type: 'success',
    };
    alertsView.renderAlerts(data);
};
const requestSentFailure = () => {
    const data = {
        text: 'You request was unable to sent to xyz!',
        type: 'failure',
    };
    alertsView.renderAlerts(data);
};

const requestReceivedSuccess = () => {
    const data = {
        text: 'You have received a request from xyz!',
        type: 'info',
    };
    alertsView.renderAlerts(data);
};
