import faker from 'faker';
import { renderTitle } from '../chat-panel.view';
import { elements, select } from '../../utils/base.util';

export const renderRecentChatItem = () => `
<li class="chat-panel-recent-chat__item" data-user=${faker.random.uuid()} title="${faker.name.findName()}" draggable="true">
    <div class="chat-panel-recent-chat__link" role="button">
        <div class="chat-panel-recent-chat__status">
            <img src="${faker.image.avatar()}" alt="" class="chat-panel-recent-chat__photo" />
            <!-- STATE -->
            <svg class="chat-panel-recent-chat__state chat-panel-recent-chat__state--active">
                <use xlink:href="svg/sprite.svg#icon-dot"></use>
            </svg>
        </div>
        <!-- USER INFO -->
        <div class="chat-panel-recent-chat__info">
            <span class="chat-panel-recent-chat__name">${faker.name.findName()}</span>
            <!-- SETTING -->
            <div class="chat-panel-recent-chat__setting">
                <!-- mark-read -->
                <svg class="chat-panel-recent-chat__setting--icon chat-panel-recent-chat__setting--icon-mark-read" title="">
                    <use xlink:href="svg/sprite.svg#icon-mark-read"></use>
                </svg>
                <!-- pin-chat -->
                <svg class="chat-panel-recent-chat__setting--icon chat-panel-recent-chat__setting--icon-pin-chat" title="">
                    <use xlink:href="svg/sprite.svg#icon-pin-chat"></use>
                </svg>
                <!-- mute-notification -->
                <svg class="chat-panel-recent-chat__setting--icon chat-panel-recent-chat__setting--icon-mute-notification" title="">
                    <use xlink:href="svg/sprite.svg#icon-mute-notification"></use>
                </svg>
                <!-- add-favourite -->
                <svg class="chat-panel-recent-chat__setting--icon chat-panel-recent-chat__setting--icon-add-favourite" title="">
                    <use xlink:href="svg/sprite.svg#icon-add-favourite"></use>
                </svg> 
            </div>
        </div>
        
        <!-- OPTION -->
        <svg class="chat-panel-recent-chat__option chat-panel__drop" title="Chat Options">
            <use xlink:href="svg/sprite.svg#icon-down"></use>
        </svg>
    </div>
</li>
`;
export const renderRecentChat = () => {
    // Data
    const title = {
        label: 'Recent Chats',
        count: 34,
        className: 'recent-chat',
    };

    const markup = `
    <div class="chat-panel-recent-chat">                    
            ${renderTitle(title)}
        <ul class="chat-panel-recent-chat__list">
            ${renderRecentChatItem()}
        </ul>
    </div>    
    `;
    select(elements.ChatPanel).insertAdjacentHTML('beforeend', markup);
};
