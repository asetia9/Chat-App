import { elements, select } from '../../utils/base.util';

export const renderSetting = () => {
    let markup = `
<div class="chat-profile-setting">
    <div class="chat-profile-setting__heading">
        Settings
    </div>
    <ul class="chat-profile-setting__list">
        <li class="chat-profile-setting__item" data-type="color">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg">
                    <use xlink:href="svg/sprite.svg#icon-setting-color"></use>
                </svg>
                <div class="chat-profile-setting__content">
                    <span class="chat-profile-setting__span">
                        Color
                    </span>
                    <span class="chat-profile-setting__description">
                        Life is like a rainbow
                    </span>
                </div>
            </div>
        </li>
        <li class="chat-profile-setting__item" data-type="wallpaper">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg">
                    <use xlink:href="svg/sprite.svg#icon-setting-wallpaper"></use>
                </svg>
                <div class="chat-profile-setting__content">
                    <span class="chat-profile-setting__span">
                        Wallpaper
                    </span>
                    <span class="chat-profile-setting__description">
                        Customize your wallpaper like pro
                    </span>
                </div>
            </div>
        </li>
        <li class="chat-profile-setting__item" data-type="privacy">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg">
                    <use xlink:href="svg/sprite.svg#icon-setting-privacy"></use>
                </svg>
                <div class="chat-profile-setting__content">
                    <span class="chat-profile-setting__span">
                        Privacy
                    </span>
                    <span class="chat-profile-setting__description">
                        Privacy is not up for discussion
                    </span>
                </div>
            </div>
        </li>
        <li class="chat-profile-setting__item" data-type="update-password">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg chat-profile-setting__svg--password">
                    <use xlink:href="svg/sprite.svg#icon-setting-password"></use>
                </svg>
                <div class="chat-profile-setting__content">
                    <span class="chat-profile-setting__span">
                        Password
                    </span>
                    <span class="chat-profile-setting__description">
                    Love is secret password to every soul
                    </span>
                </div>
            </div>
        </li>
        <li class="chat-profile-setting__item" data-type="delete-account">
            <div class="chat-profile-setting__title">
                <svg class="chat-profile-setting__svg chat-profile-setting__svg--delete">
                    <use xlink:href="svg/sprite.svg#icon-setting-delete"></use>
                </svg>
                <div class="chat-profile-setting__content chat-profile-setting__content--delete">
                    <span class="chat-profile-setting__span">
                        Delete Account
                    </span>
                    <span class="chat-profile-setting__description">
                        We will miss you!
                    </span>
                </div>
            </div>
        </li>
    </ul>
</div>
    `;
    select(elements.ChatProfile).insertAdjacentHTML('beforeend', markup);
};

export const renderColor = () => {};
export const renderWallpaper = () => {};
export const renderPrivacy = () => {};
