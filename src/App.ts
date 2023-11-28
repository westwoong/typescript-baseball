import * as readlineSync from 'readline-sync';
import {validateInputNumber} from "./validator/validateNumber";
import {generateThreeRandomNumber} from "./conf/gameFunction";
import {resultGameValue} from "./display/gameResultDisplay";

export class App {
    private computerNumber: string;
    private game: boolean;

    constructor() {
        console.log('숫자 야구 게임을 시작합니다.');
        this.computerNumber = String(generateThreeRandomNumber());
        this.game = true;
    }

    public play() {
        while (this.game) {
            try {
                const userInputNumber = readlineSync.question('숫자를 입력해주세요 : ');
                validateInputNumber(userInputNumber);
                console.log(`컴퓨터 입력값 : ${this.computerNumber}`);

                const result = resultGameValue(userInputNumber, this.computerNumber);
                console.log(`게임 결과 : ${result}`);

                this.isGameClear(result);
            } catch (error: any) {
                console.error(error.message);
            }
        }
    }

    private isGameClear(result: string) {
        if (result === '3스트라이크 0볼') {
            this.game = this.isPlayAgain();
        }
    }

    private isPlayAgain(): boolean {
        const playAgainInput = readlineSync.question('\n니가 이김, 게임 다시할꺼? 할꺼면 1 입력, 안할꺼면 2입력 : ');
        if (playAgainInput === '1') {
            console.log('\n게임을 다시 시작합니다.');
            this.computerNumber = String(generateThreeRandomNumber());
            return true;
        } else {
            return false;
        }
    }
}

const app = new App();

app.play()

