import { elements, select } from '../../utils/base.util';
import { renderTitle } from '../chat-panel.view';

export const renderRequestSent = () => {
    // Data
    const title = {
        label: 'Request Sent',
        count: 37,
        className: 'request-sent',
    };

    const markup = `
    <div class="chat-panel-request-sent">     
        ${renderTitle(title)}
    </div>
    `;

    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
