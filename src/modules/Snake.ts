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

        this.head.style.left = value + 'px';
    }

    //set head coordinateY
    set coordinateY(value: number) {
        if (this.coordinateY == value) {
            return;
        }

        if(value < 0 || value > 290) {
            throw new Error('Hit the wall!');
        }
        
        this.head.style.top = value + 'px';
    }

    addBody = () => {
        this.container.insertAdjacentHTML('beforeend', '<div></div>');
    }

}

export default Snake;