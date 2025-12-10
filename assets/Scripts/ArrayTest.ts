import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ArrayTest')
export class ArrayTest extends Component {
    start() {
        this.mapTest();
        this.filterTest();
        this.reduceTest();
        this.foreachTest();
        this.someTest();
        this.everyTest();
        this.findTest();
        this.findIndexTest();
        this.includeTest();
    }

    mapTest() {
        const numbers = [1, 2, 3, 4, 5];
        const squared = numbers.map(num => num * num);
        console.log('Original numbers:', numbers);
        console.log('Squared numbers:', squared);
    }

    filterTest() {
        const numbers = [1, 2, 3, 4, 5];
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        console.log('Original numbers:', numbers);
        console.log('Even numbers:', evenNumbers);
    }

    reduceTest() {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
        console.log('Original numbers:', numbers);
        console.log('Sum of numbers:', sum);
    }

    foreachTest() {
        const numbers = [1, 2, 3, 4, 5];
        console.log('Original numbers:');
        numbers.forEach(num => console.log(num));
    }

    someTest() {
        const numbers = [1, 2, 3, 4, 5];
        const hasEven = numbers.some(num => num % 2 === 0);
        console.log('Contains even number:', hasEven);
    }

    everyTest() {
        const numbers = [1, 2, 3, 4, 5];
        const allPositive = numbers.every(num => num > 0);
        console.log('All numbers are positive:', allPositive);
    }

    findTest() {
        const numbers = [1, 2, 3, 4, 5];
        const firstEven = numbers.find(num => num % 2 === 0);
        console.log('First even number:', firstEven);
    }

    findIndexTest() {
        const numbers = [1, 2, 3, 4, 5];
        const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
        console.log('Index of first even number:', firstEvenIndex);
    }

    includeTest() {
        const numbers = [1, 2, 3, 4, 5];
        const includesThree = numbers.includes(3);
        console.log('Array includes 3:', includesThree);
    }
}

