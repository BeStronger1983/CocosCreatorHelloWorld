import { _decorator, Component, Node, PageView } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PageViewTest')
export class PageViewTest extends Component {
    onPageEvent(pageview: PageView) {
        console.log('PageView event: ', pageview.getCurrentPageIndex());
    }
}

