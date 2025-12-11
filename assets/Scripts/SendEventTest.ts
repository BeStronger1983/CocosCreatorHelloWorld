import { _decorator, Component, Node } from 'cc';
import { EventBus, GameEvents } from './EventBus';
const { ccclass, property } = _decorator;

@ccclass('SendEventTest')
export class SendEventTest extends Component {
    start() {
        setTimeout(() => {
            EventBus.emit(GameEvents.SCORE_UPDATE, 100);
        }, 2000);
    }
}

