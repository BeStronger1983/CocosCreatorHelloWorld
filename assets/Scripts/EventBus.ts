// event-bus.ts
import { EventTarget } from 'cc';

export const EventBus = new EventTarget();

// 事件名稱統一集中管理
export const GameEvents = {
    PLAYER_DIE: 'PLAYER_DIE',
    SCORE_UPDATE: 'SCORE_UPDATE',
};
