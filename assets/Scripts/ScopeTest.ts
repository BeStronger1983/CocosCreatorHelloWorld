import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScopeTest')
export class ScopeTest extends Component {
    start() {
        this.varTest();
        this.letTest();
        this.constTest();
    }

    update(deltaTime: number) {
        
    }

    varTest(){
        console.log(x); // 輸出: undefined (變數提升，但未賦值)

        if(true){
            var x = 10;
            console.log(x); // 輸出: 10
        }

        console.log(x); // 輸出: 10 (x 在整個函式作用域中有效)

        // 在 for 迴圈中
        for (var j = 0; j < 3; j++) {
            // ...
        }
        console.log(j); // 輸出: 3 (j 洩漏到 for 迴圈之外)
    }

    letTest(){
        // console.log(x); // 會報錯，因為 x 在此作用域中未定義
        
        if(true){
            let x = 10;
            console.log(x);
        }

        // console.log(x); // 會報錯，因為 x 在此作用域中未定義

        // 在 for 迴圈中
        for (let j = 0; j < 3; j++) {
            // ...
        }
        // console.log(j); // 報錯: ReferenceError (j 僅在 for 迴圈內有效)
    }

    constTest(){
        // 1. 基本類型 (完全不可變)
        const PI = 3.14159;
        // PI = 3.0; // ❌ 報錯: TypeError: Assignment to constant variable.

        // 2. 複合類型 (參考不可變，內容可變)
        const config = {
            gravity: -10,
            speed: 5
        };

        config.gravity = -9.8; // ✅ 這是允許的，改變了物件的屬性
        console.log(config.gravity); // 輸出: -9.8

        // config = { gravity: 0, speed: 0 }; // ❌ 報錯: 不允許重新賦值給新的物件
    }
}

