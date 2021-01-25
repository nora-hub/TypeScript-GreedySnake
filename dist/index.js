"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/index.less");
class Food {
    constructor() {
        this.shufflePosition = () => {
            let top = Math.round(Math.random() * 29) * 10;
            let left = Math.round(Math.random() * 29) * 10;
            this.element.style.left = left + 'px';
            this.element.style.top = top + 'px';
        };
        this.element = document.getElementById('food'); // !表示元素一定存在，不需要判断空的情况
    }
    get coordinateX() {
        return this.element.offsetLeft;
    }
    get coordinateY() {
        return this.element.offsetTop;
    }
}
// test
const food = new Food();
console.log(food);
// let monitorInterval = setInterval (function() {
//     food.shufflePosition();
// }, 1000);
// setTimeout(function() {
//     clearInterval(monitorInterval);
// }, 5000);
