import { renderDropdowns, assignCoordinate } from './dropdowns.view';
import { elementStrings, elementClasses } from '../../utils/base.util';

export const renderMessageOutDropdown = ({ coordinate }) => {
    const data = {
        groups: [
            {
                type: 'copy',
                text: 'Copy Message',
            },
            {
                type: 'edit',
                text: 'Edit',
            },
            {
                type: 'reply',
                text: 'Reply',
            },
            {
                type: 'delete',
                text: 'Delete Message',
            },
        ],
        className: elementClasses.dropdowns.chatBoxDropdown.out,
        coordinate,
    };
    // Rendering Dropdown
    renderDropdowns(data);
};

export const renderMessageInDropdown = ({ coordinate }) => {
    const data = {
        groups: [
            {
                type: 'copy',
                text: 'Copy Message',
            },
            {
                // like/unlike
                type: 'like',
                // Like/Unlike
                text: 'Like',
            },
            {
                type: 'reply',
                text: 'Reply',
            },
            {
                type: 'delete',
                text: 'Delete Message',
            },
        ],
        className: elementClasses.dropdowns.chatBoxDropdown.in,
        coordinate,
    };
    // Rendering Dropdown
    renderDropdowns(data);
};
export const renderMessageOptionsDropdown = ({ coordinate }) => {};
