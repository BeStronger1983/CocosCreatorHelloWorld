import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonTest')
export class ButtonTest extends Component {
    start() {

    }

    onClick(event: Event, customEventData: string) {
        console.log(customEventData);
    }
}


