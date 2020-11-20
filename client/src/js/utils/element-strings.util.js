const elementStrings = {
    btns: {
        loginCtaBtn: '.cta__log-in',
        signupCtaBtn: '.cta__sign-up',
        signupBtn: '.user-signup__form--btn',
        loginBtn: '.user-login__form--btn',
        forgetBtn: '.user-forget__form--btn',
        resetBtn: '.user-reset__form--btn',
        updateBtn: '.user-update__form--btn',
    },
    forms: {
        signup: {
            form: '.user-signup__form',
            toggle: {
                password: '.user-signup__form--toggle-password',
                passwordConfirm: '.user-signup__form--toggle-password-confirm',
            },
            elements: {
                password: '.user-signup__form--input-password',
                passwordConfirm: '.user-signup__form--input-password-confirm',
            },
            addOn: '.user-signup__form--addon',
        },
        login: {
            form: '.user-login__form',
            toggle: {
                password: '.user-login__form--toggle-password',
            },
            elements: {
                password: '.user-login__form--input-password',
            },
            forget: '.user-login__form--forget',
            addOn: '.user-login__form--addon',
        },
        forget: {
            form: '.user-forget__form',
            addOn: '.user-forget__form--addon',
        },
        reset: {
            form: '.user-reset__form',
            toggle: {
                password: '.user-reset__form--toggle-password',
                passwordConfirm: '.user-reset__form--toggle-password-confirm',
                token: '.user-reset__form--toggle-token',
            },
            elements: {
                password: '.user-reset__form--input-password',
                passwordConfirm: '.user-reset__form--input-password-confirm',
                token: '.user-reset__form--input-token',
            },
            addOn: '.user-reset__form--addon',
        },
        update: {
            form: '.user-update__form',
            toggle: {
                passwordCurrent: '.user-update__form--toggle-password-current',
                password: '.user-update__form--toggle-password',
                passwordConfirm: '.user-update__form--toggle-password-confirm',
            },
            elements: {
                passwordCurrent: '.user-update__form--input-password-current',
                password: '.user-update__form--input-password',
                passwordConfirm: '.user-update__form--input-password-confirm',
            },
        },
    },
    inputs: {
        signupInput: '.user-signup__form--input',
        loginInput: '.user-login__form--input',
        forgetInput: '.user-forget__form--input',
        resetInput: '.user-reset__form--input',
        updateInput: '.user-update__form--input',
    },
    drops: {
        aboutMeDrop: '.about-me__drop',
        chatPanelDrop: '.chat-panel__drop',
        chatBoxDrop: {
            in: '.chat-box-user__drop-in',
            out: '.chat-box-user__drop-out',
            options: '.chat-box-user__header--options',
        },
    },
    dropdowns: {
        aboutMeDropdown: '.about-me__dropdown',
        chatPanelDropdown: '.chat-panel-user__dropdown',
        chatBoxDropdown: {
            in: '.chat-box-user-in__dropdown',
            out: '.chat-box-user-out__dropdown',
        },
    },
    dropdownItems: {
        aboutMeDropdownItem: '.about-me__dropdown--item',
        chatPanelDropdownItem: '.chat-panel-user__dropdown--item',
        chatBoxDropdownItem: {
            in: '.chat-box-user-in__dropdown--item',
            out: '.chat-box-user-out__dropdown--item',
        },
    },
    drags: {
        chatPanelDrag: '.chat-box-drag',
    },

    navbar: {
        user: {
            list: '.navbar-user__list',
            item: '.navbar-user__item',
            photo: '.navbar-user__photo',
        },
    },

    chatPanel: {
        activeNow: {
            list: '.chat-panel-active-now__list',
            item: '.chat-panel-active-now__item',
        },
        recentChat: {
            list: '.chat-panel-recent-chat__list',
            item: '.chat-panel-recent-chat__item',
        },
        search: {
            list: '.chat-panel-search__list',
            item: '.chat-panel-search__item',
        },
        friend: {
            list: '.chat-panel-friend__list',
            item: '.chat-panel-friend__item',
        },
        requestSent: {
            list: '.chat-panel-request-sent__list',
            item: '.chat-panel-request-sent__item',
        },
        requestReceive: {
            list: '.chat-panel-request-receive__list',
            item: '.chat-panel-request-receive__item',
        },
    },

    chatBox: {
        header: {
            back: '.chat-box-user__header--back',
            img: '.chat-box-user__header--img',
            name: '.chat-box-user__header--content-name',
        },
        background: '.chat-box-user__field',
        footer: {
            emoji: '.chat-box-user__footer--emoji',
            location: '.chat-box-user__footer--location',
            attach: '.chat-box-user__footer--attach',
            camera: '.chat-box-user__footer--camera',
            input: '.chat-box-user__footer--input',
            send: '.chat-box-user__footer--send',
        },
    },

    chatProfile: {
        user: {
            form: '.chat-profile__user--form',
            update: '.chat-profile__user--update',
            content: {
                content: '.chat-profile__user-content',
                img: '.chat-profile__user-content--img',
                upload: '.chat-profile__user-content--upload',
                input: '.chat-profile__user-content--input',
            },
            avatar: {
                avatar: '.chat-profile__user-avatar',
                group: '.chat-profile__user-avatar--group',
                img: '.chat-profile__user-avatar--img',
                icon: '.chat-profile__user-avatar--icon',
            },
            about: {
                about: '.chat-profile__user-about',
                edit: '.chat-profile__user-about--svg',
                group: '.chat-profile__user-about--group',
                input: '.chat-profile__user-about--input',
                elements: {
                    name: '.chat-profile__user-about--input-name',
                    email: '.chat-profile__user-about--input-email',
                    bio: '.chat-profile__user-about--input-bio',
                },
            },
            save: '.chat-profile__user-save',
        },
        setting: {
            list: '.chat-profile-setting__list',
            item: '.chat-profile-setting__item',
        },
        subSetting: {
            color: {
                back: '.chat-profile-setting-color__header--back',
                list: '.chat-profile-setting-color__list',
                item: '.chat-profile-setting-color__item',
                icon: '.chat-profile-setting-color__icon',
            },
            wallpaper: {
                back: '.chat-profile-setting-wallpaper__header--back',
                list: '.chat-profile-setting-wallpaper__list',
                item: '.chat-profile-setting-wallpaper__item',
                content: '.chat-profile-setting-wallpaper__content',
            },
            privacy: {
                back: '.chat-profile-setting-privacy__header--back',
            },
        },
    },
};
export default elementStrings;
