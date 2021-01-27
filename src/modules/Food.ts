class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!; // !表示元素一定存在，不需要判断空的情况
    }

    get coordinateX() {
        return this.element.offsetLeft;
    }

    get coordinateY() {
        return this.element.offsetTop;
    }

    shufflePosition = () => {
        let top = Math.round(Math.random()*29)*10;
        let left = Math.round(Math.random()*29)*10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;