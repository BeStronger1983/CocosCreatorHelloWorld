import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DSTest')
export class DSTest extends Component {
    start() {
        console.log("=== TypeScript 資料結構範例 ===");
        
        // 1. 陣列 (Array) 範例
        this.arrayExamples();
        
        // 2. Map 範例
        this.mapExamples();
        
        // 3. Set 範例
        this.setExamples();
        
        // 4. 物件/字典 (Object/Dictionary) 範例
        this.objectExamples();
        
        // 5. 堆疊 (Stack) 範例
        this.stackExamples();
        
        // 6. 佇列 (Queue) 範例
        this.queueExamples();
        
        // 7. 鏈結串列 (Linked List) 範例
        this.linkedListExamples();
    }

    /**
     * 陣列 (Array) 範例
     * 陣列是最基本的資料結構，可以存儲有序的元素集合
     */
    arrayExamples() {
        console.log("\n--- 陣列 (Array) ---");
        
        // 建立陣列的幾種方式
        const arr1: number[] = [1, 2, 3, 4, 5];
        const arr2: Array<string> = ["a", "b", "c"];
        const arr3 = new Array<number>(10); // 建立長度為 10 的空陣列
        
        // 常用操作
        arr1.push(6);           // 在尾端添加元素
        arr1.pop();             // 移除尾端元素
        arr1.unshift(0);        // 在開頭添加元素
        arr1.shift();           // 移除開頭元素
        
        // 陣列遍歷
        arr1.forEach((item, index) => {
            console.log(`索引 ${index}: ${item}`);
        });
        
        // 陣列轉換
        const doubled = arr1.map(x => x * 2);           // 每個元素乘以 2
        const filtered = arr1.filter(x => x > 3);       // 篩選大於 3 的元素
        const sum = arr1.reduce((acc, x) => acc + x, 0); // 計算總和
        
        console.log("原陣列:", arr1);
        console.log("每個元素乘以 2:", doubled);
        console.log("大於 3 的元素:", filtered);
        console.log("總和:", sum);
        
        // 陣列排序
        const unsorted = [5, 2, 8, 1, 9];
        unsorted.sort((a, b) => a - b); // 升序排序
        console.log("排序後:", unsorted);
    }

    /**
     * Map 範例
     * Map 是鍵值對的集合，鍵可以是任何類型（不只是字串）
     * 保持插入順序，查詢效率高
     */
    mapExamples() {
        console.log("\n--- Map ---");
        
        // 建立 Map
        const playerScores = new Map<string, number>();
        
        // 添加鍵值對
        playerScores.set("Alice", 100);
        playerScores.set("Bob", 85);
        playerScores.set("Charlie", 92);
        
        // 獲取值
        console.log("Alice 的分數:", playerScores.get("Alice"));
        
        // 檢查鍵是否存在
        console.log("是否有 Bob?", playerScores.has("Bob"));
        
        // 刪除鍵值對
        playerScores.delete("Bob");
        console.log("刪除 Bob 後是否還有?", playerScores.has("Bob"));
        
        // 獲取大小
        console.log("Map 大小:", playerScores.size);
        
        // 遍歷 Map
        playerScores.forEach((score, player) => {
            console.log(`${player}: ${score} 分`);
        });
        
        // 使用 for...of 遍歷
        for (const [player, score] of playerScores) {
            console.log(`玩家 ${player} 得分 ${score}`);
        }
        
        // Map 可以使用物件作為鍵
        const objMap = new Map<object, string>();
        const key1 = { id: 1 };
        const key2 = { id: 2 };
        objMap.set(key1, "第一個物件");
        objMap.set(key2, "第二個物件");
        console.log("物件作為鍵:", objMap.get(key1));
        
        // 清空 Map
        playerScores.clear();
        console.log("清空後大小:", playerScores.size);
    }

    /**
     * Set 範例
     * Set 是不重複元素的集合，自動去除重複值
     */
    setExamples() {
        console.log("\n--- Set ---");
        
        // 建立 Set
        const uniqueNumbers = new Set<number>();
        
        // 添加元素
        uniqueNumbers.add(1);
        uniqueNumbers.add(2);
        uniqueNumbers.add(3);
        uniqueNumbers.add(2); // 重複的 2 不會被添加
        
        console.log("Set 大小:", uniqueNumbers.size); // 輸出 3，不是 4
        
        // 檢查元素是否存在
        console.log("是否包含 2?", uniqueNumbers.has(2));
        console.log("是否包含 5?", uniqueNumbers.has(5));
        
        // 刪除元素
        uniqueNumbers.delete(2);
        console.log("刪除 2 後大小:", uniqueNumbers.size);
        
        // 遍歷 Set
        uniqueNumbers.forEach(num => {
            console.log("Set 中的數字:", num);
        });
        
        // 使用 Set 去除陣列中的重複元素
        const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
        const uniqueArray = [...new Set(arrayWithDuplicates)];
        console.log("原陣列:", arrayWithDuplicates);
        console.log("去重後:", uniqueArray);
        
        // Set 操作：聯集、交集、差集
        const setA = new Set([1, 2, 3, 4]);
        const setB = new Set([3, 4, 5, 6]);
        
        // 聯集
        const union = new Set([...setA, ...setB]);
        console.log("聯集:", [...union]);
        
        // 交集
        const intersection = new Set([...setA].filter(x => setB.has(x)));
        console.log("交集:", [...intersection]);
        
        // 差集 (A - B)
        const difference = new Set([...setA].filter(x => !setB.has(x)));
        console.log("差集:", [...difference]);
    }

    /**
     * 物件/字典 (Object/Dictionary) 範例
     * JavaScript 物件可以作為字典使用，但 Map 通常是更好的選擇
     */
    objectExamples() {
        console.log("\n--- 物件/字典 (Object) ---");
        
        // 建立物件字典
        interface PlayerInfo {
            name: string;
            level: number;
            hp: number;
        }
        
        const players: { [key: string]: PlayerInfo } = {
            "player1": { name: "Alice", level: 10, hp: 100 },
            "player2": { name: "Bob", level: 8, hp: 80 }
        };
        
        // 訪問屬性
        console.log("Player1 資訊:", players["player1"]);
        console.log("Player1 名稱:", players["player1"].name);
        
        // 添加新屬性
        players["player3"] = { name: "Charlie", level: 12, hp: 120 };
        
        // 檢查屬性是否存在
        console.log("是否有 player3?", "player3" in players);
        console.log("是否有 player4?", "player4" in players);
        
        // 刪除屬性
        delete players["player2"];
        
        // 獲取所有鍵
        const keys = Object.keys(players);
        console.log("所有玩家 ID:", keys);
        
        // 獲取所有值
        const values = Object.values(players);
        console.log("所有玩家資訊:", values);
        
        // 獲取鍵值對
        const entries = Object.entries(players);
        console.log("鍵值對:", entries);
        
        // 遍歷物件
        for (const [id, info] of Object.entries(players)) {
            console.log(`${id}: ${info.name}, Level ${info.level}`);
        }
        
        // 使用 Record 類型（TypeScript 專用）
        const scores: Record<string, number> = {
            "math": 95,
            "english": 88,
            "science": 92
        };
        console.log("數學分數:", scores.math);
    }

    /**
     * 堆疊 (Stack) 範例
     * 後進先出 (LIFO - Last In First Out) 的資料結構
     * TypeScript 沒有內建的 Stack，但可以用陣列模擬
     */
    stackExamples() {
        console.log("\n--- 堆疊 (Stack) ---");
        
        // 使用陣列模擬堆疊
        const stack: number[] = [];
        
        // push: 將元素推入堆疊頂端
        stack.push(1);
        stack.push(2);
        stack.push(3);
        console.log("堆疊狀態:", stack);
        
        // pop: 從堆疊頂端彈出元素
        const top = stack.pop();
        console.log("彈出的元素:", top);
        console.log("彈出後的堆疊:", stack);
        
        // peek: 查看堆疊頂端元素（不移除）
        const peekValue = stack[stack.length - 1];
        console.log("堆疊頂端元素:", peekValue);
        
        // 檢查堆疊是否為空
        const isEmpty = stack.length === 0;
        console.log("堆疊是否為空?", isEmpty);
        
        // 堆疊的實際應用：括號匹配
        console.log("括號匹配範例:");
        console.log("'()' 是否匹配?", this.isValidParentheses("()"));
        console.log("'()[]{}' 是否匹配?", this.isValidParentheses("()[]{}"));
        console.log("'(]' 是否匹配?", this.isValidParentheses("(]"));
        console.log("'([)]' 是否匹配?", this.isValidParentheses("([)]"));
    }

    /**
     * 檢查括號是否匹配（堆疊應用）
     */
    isValidParentheses(s: string): boolean {
        const stack: string[] = [];
        const pairs: { [key: string]: string } = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        
        for (const char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else if (char === ')' || char === ']' || char === '}') {
                if (stack.length === 0 || stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }
        
        return stack.length === 0;
    }

    /**
     * 佇列 (Queue) 範例
     * 先進先出 (FIFO - First In First Out) 的資料結構
     * TypeScript 沒有內建的 Queue，但可以用陣列模擬
     */
    queueExamples() {
        console.log("\n--- 佇列 (Queue) ---");
        
        // 使用陣列模擬佇列
        const queue: string[] = [];
        
        // enqueue: 將元素加入佇列尾端
        queue.push("第一個");
        queue.push("第二個");
        queue.push("第三個");
        console.log("佇列狀態:", queue);
        
        // dequeue: 從佇列前端移除元素
        const first = queue.shift();
        console.log("移除的元素:", first);
        console.log("移除後的佇列:", queue);
        
        // peek: 查看佇列前端元素（不移除）
        const front = queue[0];
        console.log("佇列前端元素:", front);
        
        // 檢查佇列是否為空
        const isEmpty = queue.length === 0;
        console.log("佇列是否為空?", isEmpty);
        
        // 佇列的實際應用：廣度優先搜尋 (BFS)
        console.log("廣度優先搜尋範例:");
        const tree = {
            value: 1,
            children: [
                { value: 2, children: [{ value: 4, children: [] }, { value: 5, children: [] }] },
                { value: 3, children: [{ value: 6, children: [] }] }
            ]
        };
        console.log("BFS 遍歷順序:", this.bfsTraversal(tree));
    }

    /**
     * 廣度優先搜尋（佇列應用）
     */
    bfsTraversal(root: any): number[] {
        const result: number[] = [];
        const queue: any[] = [root];
        
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            
            for (const child of node.children) {
                queue.push(child);
            }
        }
        
        return result;
    }

    /**
     * 鏈結串列 (Linked List) 範例
     * 由節點組成的線性資料結構，每個節點包含資料和指向下一個節點的指標
     */
    linkedListExamples() {
        console.log("\n--- 鏈結串列 (Linked List) ---");
        
        // 建立鏈結串列
        const list = new LinkedList<number>();
        
        // 添加元素
        list.append(1);
        list.append(2);
        list.append(3);
        console.log("串列:", list.toArray());
        
        // 在開頭添加元素
        list.prepend(0);
        console.log("在開頭添加 0:", list.toArray());
        
        // 在指定位置插入元素
        list.insertAt(1, 99);
        console.log("在索引 1 插入 99:", list.toArray());
        
        // 刪除指定位置的元素
        list.removeAt(1);
        console.log("刪除索引 1 的元素:", list.toArray());
        
        // 查找元素
        console.log("索引 2 的元素:", list.get(2));
        
        // 獲取大小
        console.log("串列大小:", list.size());
        
        // 檢查是否為空
        console.log("串列是否為空?", list.isEmpty());
    }
}

/**
 * 鏈結串列節點類別
 */
class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;
    
    constructor(value: T) {
        this.value = value;
    }
}

/**
 * 鏈結串列類別
 */
class LinkedList<T> {
    private head: ListNode<T> | null = null;
    private length: number = 0;
    
    /**
     * 在串列尾端添加元素
     */
    append(value: T): void {
        const newNode = new ListNode(value);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    
    /**
     * 在串列開頭添加元素
     */
    prepend(value: T): void {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    
    /**
     * 在指定位置插入元素
     */
    insertAt(index: number, value: T): boolean {
        if (index < 0 || index > this.length) {
            return false;
        }
        
        if (index === 0) {
            this.prepend(value);
            return true;
        }
        
        const newNode = new ListNode(value);
        let current = this.head;
        let previous: ListNode<T> | null = null;
        let currentIndex = 0;
        
        while (currentIndex < index) {
            previous = current;
            current = current!.next;
            currentIndex++;
        }
        
        newNode.next = current;
        previous!.next = newNode;
        this.length++;
        return true;
    }
    
    /**
     * 移除指定位置的元素
     */
    removeAt(index: number): T | null {
        if (index < 0 || index >= this.length || !this.head) {
            return null;
        }
        
        if (index === 0) {
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }
        
        let current = this.head;
        let previous: ListNode<T> | null = null;
        let currentIndex = 0;
        
        while (currentIndex < index) {
            previous = current;
            current = current.next!;
            currentIndex++;
        }
        
        previous!.next = current.next;
        this.length--;
        return current.value;
    }
    
    /**
     * 獲取指定位置的元素
     */
    get(index: number): T | null {
        if (index < 0 || index >= this.length || !this.head) {
            return null;
        }
        
        let current = this.head;
        let currentIndex = 0;
        
        while (currentIndex < index) {
            current = current.next!;
            currentIndex++;
        }
        
        return current.value;
    }
    
    /**
     * 獲取串列大小
     */
    size(): number {
        return this.length;
    }
    
    /**
     * 檢查串列是否為空
     */
    isEmpty(): boolean {
        return this.length === 0;
    }
    
    /**
     * 將串列轉換為陣列
     */
    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        
        return result;
    }
}

