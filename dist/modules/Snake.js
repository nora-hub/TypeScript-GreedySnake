"use strict";
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
        this.head.style.left = value + 'px';
    }
    //set head coordinateY
    set coordinateY(value) {
        this.head.style.top = value + 'px';
    }
}
