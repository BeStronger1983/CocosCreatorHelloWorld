import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HttpTest')
export class HttpTest extends Component {
    async start() {
        try {
            console.log("請求開始");
            const response = await fetch("http://localhost:8080");
            const value = await response.text();
            console.log("請求結果:", value);
        } catch (error) {
            console.error("請求失敗:", error);
        } finally {
            console.log("請求結束");
        }
    }
}