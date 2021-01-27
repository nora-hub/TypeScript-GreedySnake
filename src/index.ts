import '../style/index.less'

import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';


// test
const food = new Food();
console.log(food);

const scorePanel = new ScorePanel(10, 10);

for(let i = 0; i < 200; i++ ) {
    scorePanel.addScore();
}

// let monitorInterval = setInterval (function() {
//     food.shufflePosition();
// }, 1000);

// setTimeout(function() {
//     clearInterval(monitorInterval);
// }, 5000);

