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
        // add keyboard listener
        this.init = () => {
            document.addEventListener('keydown', this.keydownHandler.bind(this)); // if not bind, this would be document!
        };
        this.keydownHandler = (event) => {
            this.direction = event.key;
        };
        this.food = new Food_1.default();
        this.scorePanel = new ScorePanel_1.default();
        this.snake = new Snake_1.default();
        this.init();
    }
}
exports.default = GameControl;
