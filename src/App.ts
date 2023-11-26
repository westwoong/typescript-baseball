import * as readlineSync from 'readline-sync';

export class App {
    async play() {
        console.log('숫자 야구 게임을 시작합니다.');
        const userInputNumber = readlineSync.question('숫자를 입력해주세요 : ');

        try {
            this.validateInputNumber(userInputNumber);
            console.log(userInputNumber);
            const computerNumber = await this.generateThreeRandomNumber();
            console.log(computerNumber);
        } catch (error: any) {
            console.error(error.message);
        }
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

    private validateInputNumber(inputNumber: string) {
        const validateRule = /^[1-9]{3}$/;
        const uniqueNumber = new Set(inputNumber);
        if (!validateRule.test(inputNumber)) throw new Error('유효하지 않은 입력, 1~9까지 서로 다른 3자리 수를 입력해주세요.');
        if (uniqueNumber.size !== 3) throw new Error('중복된 숫자가 있습니다. 서로 다른 숫자를 입력하세요.');
    }
}

const app = new App();

app.play()

