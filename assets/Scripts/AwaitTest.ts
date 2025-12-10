import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

// =========================================================
// 1. 異步任務的生產者：模擬一個 Promise 函數
// =========================================================

/**
 * @description 模擬一個需要 1 秒完成的異步任務。
 * @returns {Promise<string>} 返回一個 Promise，成功時 resolve 成功的訊息，失敗時 reject 錯誤。
 */
function simulateAsyncTask(): Promise<string> {
    return new Promise((resolve, reject) => {
        // 在 Cocos Creator 中使用 setTimeout 來模擬非同步延遲
        setTimeout(() => {
            // 隨機決定任務是否成功
            const success = Math.random() > 0.5; 

            if (success) {
                // 成功路徑
                resolve(`任務成功於 ${new Date().toLocaleTimeString()} 完成！`);
            } else {
                // 失敗路徑
                reject(new Error(`[Error] 任務執行失敗：隨機機率低於 0.5。`));
            }
        }, 1000); // 模擬 1 秒鐘的延遲 (例如：網路延遲或資源加載時間)
    });
}

@ccclass('AwaitTest')
export class AwaitTest extends Component {
    start() {
        console.log("-----------------------------------------");
        console.log("[Start] 組件初始化。即將開始異步任務流程...");
        
        // 啟動異步任務的消費者
        this.handleTaskFlow();

        // 注意：這行代碼會立即執行，不會等待 handleTaskFlow 完成
        console.log("[Start] 異步任務已啟動。主線程不受阻塞，遊戲幀率穩定運行。");
        console.log("-----------------------------------------");
    }

    /**
     * @description 異步任務的消費者：使用 async/await 處理 Promise。
     * @note 必須使用 async 關鍵字，才能在內部使用 await。
     */
    private async handleTaskFlow() {
        console.log("-> 任務流程開始：正在等待 simulateAsyncTask() 執行 (約 1 秒)...");

        try {
            // *** 核心：await 暫停當前 async 函數的執行，等待 Promise 完成 ***
            const result = await simulateAsyncTask();
            
            // 如果代碼執行到這裡，表示 Promise 成功 (Fulfilled)
            console.log("✅ [成功] 異步任務執行完成！");
            console.log("接收到的數據:", result);
        } catch (error) {
            // 如果 Promise 失敗 (Rejected)，錯誤會被 catch 捕獲
            if (error instanceof Error) {
                console.error("❌ [失敗] 捕獲到異步任務的錯誤！");
                console.error("錯誤詳細信息:", error.message);
            } else {
                console.error("❌ [失敗] 捕獲到未知錯誤:", error);
            }
        } finally {
            // 無論成功或失敗，最後都會執行
            console.log("-> 任務流程結束。\n");
        }
    }
}