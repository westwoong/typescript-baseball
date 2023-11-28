import * as readlineSync from 'readline-sync';
import {validateInputNumber} from "./validator/validateNumber";
import {GameDisplay} from "./conf/gameDisplay";
import {resultGameValue} from "./conf/gameFunction";

export class App {
    private game: GameDisplay;

    constructor() {
        console.log('숫자 야구 게임을 시작합니다.');
        this.game = new GameDisplay();
    }

    public play() {
        let gameRun = true;
        while (gameRun) {
            try {
                const userInputNumber = readlineSync.question('숫자를 입력해주세요 : ');
                validateInputNumber(userInputNumber);
                console.log(`컴퓨터 입력값 : ${this.game.getComputerNumber()}`);

                const result = resultGameValue(userInputNumber, this.game.getComputerNumber());
                console.log(`게임 결과 : ${result}`);

                gameRun = this.game.isGameClear(result, gameRun);
            } catch (error: any) {
                console.error(error.message);
            }
        }
    }
}

const app = new App();

app.play()

