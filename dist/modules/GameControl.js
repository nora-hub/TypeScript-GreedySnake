"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Food_1 = __importDefault(require("./Food"));
const ScorePanel_1 = __importDefault(require("./ScorePanel"));
const Snake_1 = __importDefault(require("./Snake"));
class GameControl {
    constructor() {
        this.direction = '';
        this.isLive = true;
        // add keyboard listener
        this.init = () => {
            document.addEventListener('keydown', this.keydownHandler.bind(this)); // if not bind, this would be document!
        };
        this.keydownHandler = (event) => {
            this.direction = event.key;
        };
        this.run = () => {
            let X = this.snake.coordinateX;
            let Y = this.snake.coordinateY;
            switch (this.direction) {
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
            }
            catch (error) {
                alert(error + ' Game Over!');
                this.isLive = false;
            }
            this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 60);
        };
        this.eatFood = (X, Y) => {
            // eat the food
            if (this.food.coordinateX === X && this.food.coordinateY === Y) {
                // shuffle food position
                this.food.shufflePosition();
                // add score
                this.scorePanel.addScore();
                // add snake body
                this.snake.addBody();
            }
        };
        this.food = new Food_1.default();
        this.scorePanel = new ScorePanel_1.default();
        this.snake = new Snake_1.default();
        this.init();
        this.run();
    }
}
exports.default = GameControl;
