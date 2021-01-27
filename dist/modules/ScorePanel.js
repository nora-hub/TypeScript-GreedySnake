"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScorePanel {
    constructor(maxLevel = 10, scoreRate = 10) {
        this.score = 0;
        this.level = 1;
        // add score
        this.addScore = () => {
            this.scoreEle.innerHTML = ++this.score + '';
            if (this.score % this.scoreRate === 0) {
                this.addLevel();
            }
        };
        // add level
        this.addLevel = () => {
            if (this.level < this.maxLevel) {
                this.levelEle.innerHTML = ++this.level + '';
            }
        };
        this.scoreEle = document.getElementById('score-value');
        this.levelEle = document.getElementById('level-value');
        this.maxLevel = maxLevel;
        this.scoreRate = scoreRate;
    }
}
exports.default = ScorePanel;
