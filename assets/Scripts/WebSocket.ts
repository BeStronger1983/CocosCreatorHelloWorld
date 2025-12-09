import { _decorator, Component, Node } from 'cc';
import { NetClient } from './NetClient';
const { ccclass, property } = _decorator;

@ccclass('WebSocket')
export class WebSocket extends Component {
    private netClient: NetClient = new NetClient();

    start() {
        this.netClient.connect('wss://echo.websocket.org');
    }

    update(deltaTime: number) {
        
    }
}

