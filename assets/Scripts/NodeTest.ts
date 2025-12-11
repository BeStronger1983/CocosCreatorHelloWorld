import { _decorator, Component, NodePool, Prefab, instantiate, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NodeTest')
export class NodeTest extends Component {
    @property(Prefab)
    prefabNode: Prefab = null;
    private nodePool: NodePool = new NodePool();

    @property(Node)
    startNode: Node = null;

    start() {
        this.initNodePool(100);
        for (let i = 0; i < 100; i++) {
            let pNode = this.nodePool.get();
            pNode.setPosition(Math.random() * 400 - 200, Math.random() * 400 - 200, 0);
            this.startNode.addChild(pNode);
            console.log('pNode', pNode);
        }
    }

    initNodePool(count: number) {
        for (let i = 0; i < count; i++) {
            const node = instantiate(this.prefabNode);
            this.nodePool.put(node);
        }
    }
}

