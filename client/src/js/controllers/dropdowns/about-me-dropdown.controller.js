// Utils
import { elementStrings, select, mode, actions } from '../../utils/base.util';
// Controllers
import * as themeController from '../theme/theme.controller';
import * as chatProfileController from '../chat-profile.controller';
// Views
import { getCoordinate } from '../../views/dropdowns/dropdowns.view';
import * as aboutMeDropdownView from '../../views/dropdowns/about-me-dropdrop.view';

const controlAboutMeDropdown = event => {
    // 0) Positioning of Dropdown
    const coordinate = getCoordinate(event);

    // 1) Render Dropdown For About Me
    aboutMeDropdownView.renderAboutMeDropdown({ coordinate });
    // 2) Add Event Listener
    select(elementStrings.dropdowns.aboutMeDropdown).addEventListener('click', controlAboutMeDropdownItems);
};
const controlAboutMeDropdownItems = event => {
    const item = event.target.closest(elementStrings.dropdownItems.aboutMeDropdownItem);
    if (!item) return;
    const { type } = item.dataset;
    switch (type) {
        case actions.aboutMe.theme:
            theme();
            break;
        case actions.aboutMe.profile:
            profile();
            break;
    }
};

const theme = () => {
    themeController.controlTheme({ mode: mode.theme.darkBlue });
};

const profile = () => {
    chatProfileController.controlChatProfile({ mode: mode.chatProfile.user });
};

export default controlAboutMeDropdown;
