import * as readlineSync from 'readline-sync';

export class App {
    private computerNumber: string;
    private game: boolean;

    constructor() {
        console.log('숫자 야구 게임을 시작합니다.');
        this.computerNumber = String(this.generateThreeRandomNumber());
        this.game = true;
    }

    public play() {
        while (this.game) {
            try {
                const userInputNumber = readlineSync.question('숫자를 입력해주세요 : ');
                this.validateInputNumber(userInputNumber);
                console.log(`컴퓨터 입력값 : ${this.computerNumber}`);

                const result = this.resultGameValue(userInputNumber, this.computerNumber);
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
            this.computerNumber = String(this.generateThreeRandomNumber());
            return true;
        } else {
            return false;
        }
    }

    private generateThreeRandomNumber(): number {
        const numberRule = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const shuffleNumbers = this.shuffleNumber(numberRule).slice(0, 3);
        return parseInt(shuffleNumbers.join(''));
    }

    private shuffleNumber(numberArray: number[]): number[] {
        for (let index = numberArray.length - 1; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [numberArray[index], numberArray[randomIndex]] = [numberArray[randomIndex], numberArray[index]];
        }
        return numberArray;
    }

    private validateInputNumber(inputNumber: string) {
        this.validateIsNumber(inputNumber);
        this.validateIsDuplicate(inputNumber);
    }

    private validateIsNumber(input: string) {
        const validateRule = /^[1-9]{3}$/;
        if (!validateRule.test(input)) throw new Error('유효하지 않은 입력, 1~9까지 서로 다른 3자리 수를 입력해주세요.');
    }

    private validateIsDuplicate(input: string) {
        const uniqueNumber = new Set(input);
        if (uniqueNumber.size !== 3) throw new Error('중복된 숫자가 있습니다. 서로 다른 숫자를 입력하세요.');
    }

    private resultGameValue(userInput: string, computerInput: string): string {
        let strike = 0;
        let count = 0;
        for (let strikePosition = 0; strikePosition < 3; strikePosition++) {
            if (userInput[strikePosition] === computerInput[strikePosition]) {
                strike++;
            }
            for (let ballPosition = 0; ballPosition < 3; ballPosition++) {
                if (userInput[strikePosition] == computerInput[ballPosition]) {
                    count++;
                }
            }
        }
        let ball = count - strike;
        return `${strike}스트라이크 ${ball}볼`;
    }
}

const app = new App();

app.play()

