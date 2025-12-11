import { _decorator, Component } from 'cc';
import { EventBus, GameEvents } from './EventBus';

const { ccclass } = _decorator;

@ccclass('ScoreUI')
export class ScoreUI extends Component {
    onLoad() {
        EventBus.on(GameEvents.SCORE_UPDATE, this.onScoreUpdate, this);
    }

    onDestroy() {
        EventBus.off(GameEvents.SCORE_UPDATE, this.onScoreUpdate, this);
    }

    onScoreUpdate(newScore: number) {
        console.log('Score updated:', newScore);
    }
}
