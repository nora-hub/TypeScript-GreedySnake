import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    direction: string = '';

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.init();        
    }

    // add keyboard listener
    init = () => {
        document.addEventListener('keydown', this.keydownHandler.bind(this)); // if not bind, this would be document!
    }

    keydownHandler = (event: KeyboardEvent) => {
        this.direction = event.key;
    }
}

export default GameControl;