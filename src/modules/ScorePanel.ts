class ScorePanel {
    score : number = 0;
    level : number = 1;
    scoreEle : Element;
    levelEle : Element;
    maxLevel : number;
    scoreRate: number;

    constructor(maxLevel: number = 10, scoreRate: number = 10) {
        this.scoreEle = document.getElementById('score-value')!;
        this.levelEle = document.getElementById('level-value')!;
        this.maxLevel = maxLevel;
        this.scoreRate = scoreRate;
    }

    // add score
    addScore = () => {
        this.scoreEle.innerHTML = ++this.score + '';
        if( this.score % this.scoreRate === 0) {
            this.addLevel();
        }
    }

    // add level
    addLevel = () => {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;