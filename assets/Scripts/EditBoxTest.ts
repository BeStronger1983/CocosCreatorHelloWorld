import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EditBoxTest')
export class EditBoxTest extends Component {
    onEditingDidBegan() {
        console.log('onEditingDidBegan');
    }

    onTextChanged(text: string) {
        console.log('onTextChanged: ' + text);
    }

    onEditingDidEnded() {
        console.log('onEditingDidEnded');
    }

    onEditingReturn() {
        console.log('onEditingReturn');
    }
}

