import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

// 範例：模擬一個需要 1 秒完成的異步任務
function asyncTask(): Promise<string> {
    return new Promise((resolve, reject) => {
        // 在 Cocos Creator 中，我們通常使用 setTimeout 來模擬延遲
        setTimeout(() => {
            const success = Math.random() > 0.5; // 假設有 50% 機率成功

            if (success) {
                // 如果成功，呼叫 resolve()，Promise 狀態變為 Fulfilled
                resolve("任務成功完成，這是結果數據！");
            } else {
                // 如果失敗，呼叫 reject()，Promise 狀態變為 Rejected
                reject(new Error("任務執行失敗：網路超時。"));
            }
        }, 1000); // 1000 毫秒 = 1 秒
    });
}

@ccclass('AsyncTest')
export class AsyncTest extends Component {
    start() {
        asyncTask().then((result: string) => {
            // 成功時執行
            console.log("處理成功：", result);
        })
        .catch((error: Error) => {
            // 失敗時執行
            console.error("處理失敗：", error.message);
        })
        .finally(() => {
            // 無論如何都會執行
            console.log("異步任務處理結束。");
        });
    }
}

