"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snake {
    constructor() {
        this.addBody = () => {
            this.container.insertAdjacentHTML('beforeend', '<div></div>');
        };
        this.container = document.getElementById('snake-container');
        // find the first body element
        this.head = document.querySelector('#snake-container > div');
        // find the all the body elements collection
        this.bodies = this.container.getElementsByTagName('div');
    }
    // get head coordinateX
    get coordinateX() {
        return this.head.offsetLeft;
    }
    // get head coordinateY
    get coordinateY() {
        return this.head.offsetTop;
    }
    //set head coordinateX
    set coordinateX(value) {
        if (this.coordinateX == value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('Hit the wall!');
        }
        this.head.style.left = value + 'px';
    }
    //set head coordinateY
    set coordinateY(value) {
        if (this.coordinateY == value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('Hit the wall!');
        }
        this.head.style.top = value + 'px';
    }
}
exports.default = Snake;
