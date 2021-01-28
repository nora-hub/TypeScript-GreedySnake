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
        this.head.style.left = value + 'px';
    }

    //set head coordinateY
    set coordinateY (value: number) {
        this.head.style.top = value + 'px';
    }

    addBody = () => {
        this.container.insertAdjacentHTML('beforeend', '<div></div>');
    }

}

export default Snake;