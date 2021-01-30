"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snake {
    constructor() {
        this.addBody = () => {
            this.container.insertAdjacentHTML('beforeend', '<div></div>');
            // this.moveBody();
        };
        this.moveBody = () => {
            for (let i = this.bodies.length - 1; i > 0; i--) {
                // get previous body element's position
                let preX = this.bodies[i - 1].offsetLeft;
                let preY = this.bodies[i - 1].offsetTop;
                // set current position
                this.bodies[i].style.left = preX + 'px';
                this.bodies[i].style.top = preY + 'px';
            }
        };
        this.hasCollision = () => {
            for (let i = this.bodies.length - 1; i > 0; i--) {
                let element = this.bodies[i];
                if (element.offsetLeft === this.coordinateX && element.offsetTop === this.coordinateY) {
                    throw new Error('Collision!');
                }
            }
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
        // cannot turn around
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            if (value < this.coordinateX) {
                value = this.coordinateX + 10;
            }
            else {
                value = this.coordinateX - 10;
            }
        }
        this.moveBody();
        // move head
        this.head.style.left = value + 'px';
        // check if the snake has collision
        this.hasCollision();
    }
    //set head coordinateY
    set coordinateY(value) {
        if (this.coordinateY == value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('Hit the wall!');
        }
        // cannot turn around
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value < this.coordinateY) {
                value = this.coordinateY + 10;
            }
            else {
                value = this.coordinateY - 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        // check if the snake has collision
        this.hasCollision();
    }
}
exports.default = Snake;
