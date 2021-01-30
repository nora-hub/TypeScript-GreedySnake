class Snake {
    container: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.container = document.getElementById('snake-container')!
        // find the first body element
        this.head = document.querySelector('#snake-container > div') as HTMLElement;
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
    set coordinateX(value: number) {
        if (this.coordinateX == value) {
            return;
        }

        if(value < 0 || value > 290) {
            throw new Error('Hit the wall!');
        }

        // cannot turn around
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if(value < this.coordinateX) {
                value = this.coordinateX + 10;
            } else {
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
    set coordinateY(value: number) {
        if (this.coordinateY == value) {
            return;
        }

        if(value < 0 || value > 290) {
            throw new Error('Hit the wall!');
        }

        // cannot turn around
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if(value < this.coordinateY) {
                value = this.coordinateY + 10;
            } else {
                value = this.coordinateY - 10;
            }
        }

        this.moveBody();
        this.head.style.top = value + 'px';
        // check if the snake has collision
        this.hasCollision();
    }

    addBody = () => {
        this.container.insertAdjacentHTML('beforeend', '<div></div>');
        // this.moveBody();
    }

    moveBody = () => {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // get previous body element's position
            let preX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let preY = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // set current position
            (this.bodies[i] as HTMLElement).style.left = preX + 'px';
            (this.bodies[i] as HTMLElement).style.top = preY + 'px';
        }
    }

    hasCollision = () => {
        for( let i = this.bodies.length - 1; i > 0; i--) {
            let element = this.bodies[i] as HTMLDListElement;
            if(element.offsetLeft === this.coordinateX && element.offsetTop === this.coordinateY) {
                throw new Error('Collision!');
            }
        }
    }

}

export default Snake;