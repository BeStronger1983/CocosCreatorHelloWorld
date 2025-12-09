import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HttpTest')
export class HttpTest extends Component {
    start() {
        fetch("http://localhost:8080").then((response: Response) => {
            return response.text()
        }).then((value) => {
            console.log(value);
        })
    }
}