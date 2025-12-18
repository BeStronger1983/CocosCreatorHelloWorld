import { _decorator, Component, Graphics } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GraphicsTest')
export class GraphicsTest extends Component {
    private graphics: Graphics | null = null;

    start() {
        this.graphics = this.getComponent(Graphics);
        this.drawLine();
        this.drawRect();
        this.fillRect();
        this.drawCircle();
        this.drawCircle2();
    }

    drawLine(){
        this.graphics.clear();
        this.graphics.moveTo(-50, 0);
        this.graphics.lineTo(50, 0);
        this.graphics.stroke();
    }

    drawRect(){
        this.graphics.rect(-100, -100, 50, 50);
        this.graphics.stroke();
    }

    fillRect(){
        this.graphics.rect(-100, 100, 50, 50);
        this.graphics.fill();
    }

    drawCircle(){
        this.graphics.circle(-100, 0, 30);
        this.graphics.stroke();
    }

    drawCircle2(){
        this.graphics.fillColor.fromHEX('#00ff00');
        this.graphics.strokeColor.fromHEX('#ff0000');
        this.graphics.lineWidth = 4;
        this.graphics.circle(100, 0, 30);
        this.graphics.fill();
        this.graphics.stroke();
    }
}

