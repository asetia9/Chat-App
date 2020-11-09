import state from '../../state';
// Utils
import { mode, elementStrings, select } from '../../utils/base.util';
// Controllers
import * as chatProfileController from '../chat-profile.controller';
import * as themeController from '../theme/theme.controller';
import * as backgroundImageController from '../background-image.controller';
import * as formController from '../auth/form.controller';
// Models
import Setting from '../../models/Setting';
// Views
import * as chatProfileSettingView from '../../views/chat-profile/chat-profile-setting.view';

export const controlSetting = info => {
    // Init Settings
    state.set('setting', info, Setting);

    // Reset chatProfile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.settingSub });

    switch (info.mode) {
        case mode.setting.color:
            color();
            break;
        case mode.setting.wallpaper:
            wallpaper();
            break;
        case mode.setting.privacy:
            privacy();
            break;
        case mode.setting.updatePassword:
            updatePassword();
            break;
        case mode.setting.deleteAccount:
            deleteAccount();
            break;
    }
    // Clear setting
    // Render for wallpaper
    // state['setting'] = null;
};

// ! For Development
window.controlSetting = controlSetting;

const color = () => {
    console.log('Color');
    // Getting theme from state
    const { theme } = state;
    // Render Color
    chatProfileSettingView.renderColor(theme);
    // Event Listener
    // Back
    select(elementStrings.chatProfile.subSetting.color.back).addEventListener('click', () =>
        chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting })
    );
    // List
    select(elementStrings.chatProfile.subSetting.color.list).addEventListener('click', event => {
        const { target } = event;
        // Item Element
        const itemElement = target.closest(elementStrings.chatProfile.subSetting.color.item);
        if (!itemElement) return;
        // Icon Element
        const iconElement = select(elementStrings.chatProfile.subSetting.color.icon, itemElement);
        // Remove Selected
        chatProfileSettingView.removeSelectedColor();
        // Add Selected
        chatProfileSettingView.addSelectedColor(iconElement);

        // Type
        const type = itemElement.dataset.type;
        if (!type) return;

        // Render Theme
        themeController.controlTheme({ color: type });
    });
};
const wallpaper = () => {
    console.log('Wallpaper');
    // Getting theme from state
    const { theme } = state;
    const { backgroundImage } = state;
    // Render Wallpaper
    chatProfileSettingView.renderWallpaper({ theme, backgroundImage });
    // Event Listener
    // Back
    select(elementStrings.chatProfile.subSetting.wallpaper.back).addEventListener('click', () =>
        chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting })
    );
    // List
    select(elementStrings.chatProfile.subSetting.wallpaper.list).addEventListener('click', event => {
        const { target } = event;
        // Item Element
        const itemElement = target.closest(elementStrings.chatProfile.subSetting.wallpaper.item);
        if (!itemElement) return;
        // Content Element
        const contentElement = select(elementStrings.chatProfile.subSetting.wallpaper.content, itemElement);
        // Remove Selected
        chatProfileSettingView.removeSelectedWallpaper();
        // Add Selected
        chatProfileSettingView.addSelectedWallpaper(contentElement);

        // Type
        const type = itemElement.dataset.type;
        if (!type) return;

        // Render Theme
        backgroundImageController.controlBackgroundImage({ mode: type });
    });
};
const privacy = () => {
    console.log('Privacy');
    // Render Privacy
    chatProfileSettingView.renderPrivacy();
    // Event Listener
};
const updatePassword = () => {
    console.log('Update Password');
    // Re render Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
    // Form
    formController.controlForm({ mode: mode.form.update });
};
const deleteAccount = () => {
    console.log('Delete Account');
    // Re render Chat Profile
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.setting });
};
