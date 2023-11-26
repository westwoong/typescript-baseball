import * as readlineSync from 'readline-sync';

export class App {
    async play() {
        console.log('숫자 야구 게임을 시작합니다.');
        const number = readlineSync.question('숫자를 입력해주세요 : ');
        console.log(number);
        const computerNumber = await this.generateThreeRandomNumber();
        console.log(computerNumber);
    }

    private async generateThreeRandomNumber() {
        const numberRule = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return this.shuffleNumber(numberRule).slice(0, 3);
    }

    private shuffleNumber(numberArray: number[]): number[] {
        for (let i = numberArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [numberArray[i], numberArray[randomIndex]] = [numberArray[randomIndex], numberArray[i]];
        }
        return numberArray;
    }
}

const app = new App();

app.play()

