import * as readlineSync from "readline-sync";
import {generateThreeRandomNumber} from "./gameFunction";

export class GameDisplay {
    private computerNumber: string;

    constructor() {
        this.computerNumber = String(generateThreeRandomNumber());
    }

    public isGameClear(result: string, game: boolean) {
        if (result === '3스트라이크 0볼') {
            return this.isPlayAgain(game);
        }
        return game;
    }

    private isPlayAgain(game: boolean): boolean {
        const playAgainInput = readlineSync.question('\n니가 이김, 게임 다시할꺼? 할꺼면 1 입력, 안할꺼면 2입력 : ');
        if (playAgainInput === '1') {
            console.log('\n게임을 다시 시작합니다.');
            this.computerNumber = String(generateThreeRandomNumber());
            return true;
        } else {
            return false;
        }
    }

    public getComputerNumber(){
        return this.computerNumber;
    }
}