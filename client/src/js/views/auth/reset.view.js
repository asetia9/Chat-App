import { elements, elementStrings, select, capitalize } from '../../utils/base.util';
import { renderForm, getInput, prepareUI, initialUI } from './form.view';
import faker from 'faker';

export const togglePassword = type => {
    const markup = `
    <svg class="user-reset__form--toggle-svg"> 
        <use xlink:href="svg/sprite.svg#icon-${type}">
        </use>
    </svg>
    `;
    const element = select(elementStrings.forms.reset.toggle.password);
    // Removing html
    element.innerHTML = '';
    // Adjust title
    element.title = `${capitalize(type)} Password`;
    // Adding html
    element.insertAdjacentHTML('beforeend', markup);
};

export const togglePasswordConfirm = type => {
    const markup = `
    <svg class="user-reset__form--toggle-svg"> 
        <use xlink:href="svg/sprite.svg#icon-${type}">
        </use>
    </svg>
    `;
    const element = select(elementStrings.forms.reset.toggle.passwordConfirm);
    // Removing html
    element.innerHTML = '';
    // Adjust title
    element.title = `${capitalize(type)} Confirm Password`;
    // Adding html
    element.insertAdjacentHTML('beforeend', markup);
};

export const renderResetForm = () => {
    const form = {
        title: 'Reset your Password',
        groups: [
            {
                type: 'text',
                for: 'token',
                id: 'token',
                label: 'Reset Token',
                placeholder: faker.random.uuid(),
                // For Development
                value: faker.random.uuid(),
                required: true,
            },
            {
                type: 'password',
                for: 'password',
                id: 'password',
                label: 'Password',
                className: 'password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
                toggle: `
                <span class="user-reset__form--toggle user-reset__form--toggle-password" title="Show Password" data-type="show">
                    <svg class="user-reset__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
            {
                type: 'password',
                for: 'passwordConfirm',
                id: 'passwordConfirm',
                className: 'password-confirm',
                label: 'Confirm Password',
                placeholder: '••••••••••••',
                // For Development
                value: 'test1234',
                autocomplete: 'new-password',
                required: true,
                minLength: 8,
                toggle: `
                <span class="user-reset__form--toggle user-reset__form--toggle-password-confirm" title="Show Confirm Password" data-type="show">
                    <svg class="user-reset__form--toggle-svg"> 
                        <use xlink:href="svg/sprite.svg#icon-show">
                        </use>
                    </svg> 
                </span>`,
            },
        ],
        className: 'user-reset',
        btntext: 'Reset Password',
        addOn: 'Go back',
    };

    select(elements.Forms).insertAdjacentHTML('beforeend', renderForm(form));
};

export const initialUIForReset = () => initialUI(elementStrings.btns.resetBtn, 'Reset Password');

export const prepareUIForReset = () => prepareUI(elementStrings.btns.resetBtn);

export const getUserInput = () => getInput(elementStrings.inputs.resetInput);
