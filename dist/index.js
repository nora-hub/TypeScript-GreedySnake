"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../style/index.less");
const Food_1 = __importDefault(require("./modules/Food"));
const ScorePanel_1 = __importDefault(require("./modules/ScorePanel"));
// test
const food = new Food_1.default();
console.log(food);
const scorePanel = new ScorePanel_1.default(10, 10);
for (let i = 0; i < 200; i++) {
    scorePanel.addScore();
}
// let monitorInterval = setInterval (function() {
//     food.shufflePosition();
// }, 1000);
// setTimeout(function() {
//     clearInterval(monitorInterval);
// }, 5000);
