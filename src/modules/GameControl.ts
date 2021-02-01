import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 3); // maximum level is 10, increase level by 3 scores
        this.snake = new Snake();
        this.init();
        this.run();        
    }

    // add keyboard listener
    init = () => {
        document.addEventListener('keydown', this.keydownHandler.bind(this)); // if not bind, this would be document!
    }

    keydownHandler = (event: KeyboardEvent) => {
        this.direction = event.key;
    }

    run = () => {
        let X = this.snake.coordinateX;
        let Y = this.snake.coordinateY;

        switch(this.direction) {
            case "Up":
            case "ArrowUp": 
                Y -= 10;
                break;
            case "Down":
            case "ArrowDown": 
                Y += 10;
                break;
            case "Left":
            case "ArrowLeft": 
                X -= 10;
                break;
            case "Left":
            case "ArrowLeft": 
                X -= 10;
                break;
            case "Right":
            case "ArrowRight": 
                X += 10;
                break;
            default:
                break;
        }
        
        // check if snake eats the food
        this.eatFood(X, Y);

        try {
            this.snake.coordinateX = X;
            this.snake.coordinateY = Y;
        } catch (error) {
            alert(error + ' Game Over!');
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 60);
    }

    eatFood = (X: number, Y: number) => {
        // eat the food
        if (this.food.coordinateX === X && this.food.coordinateY === Y) {
            // shuffle food position
            this.food.shufflePosition();
            // add score
            this.scorePanel.addScore();
            // add snake body
            this.snake.addBody();
        }
    }
}

export default GameControl;