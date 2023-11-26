import * as readlineSync from 'readline-sync';

export class App {
    async play() {
        console.log('숫자 야구 게임을 시작합니다.');
        //내가 입력한거
        const userInputNumber = readlineSync.question('숫자를 입력해주세요 : ');

        try {
            this.validateInputNumber(userInputNumber);
            //컴퓨터가 입력한거
            const computerNumber = await this.generateThreeRandomNumber();
            console.log(`컴퓨터 입력값 : ${computerNumber}`);

            const result = this.resultGameValue(userInputNumber, String(computerNumber));
            console.log(result);
            // console.log(computerNumber);
        } catch (error: any) {
            console.error(error.message);
        }
    }

    private async generateThreeRandomNumber() {
        const numberRule = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const test = this.shuffleNumber(numberRule).slice(0, 3);
        return parseInt(test.join(''));
    }

    private shuffleNumber(numberArray: string[]): string[] {
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

    private resultGameValue(userInput: string, computerInput: string) {
        let ball;
        let strike = 0;
        let count = 0;
        for (let i = 0; i < 3; i++) {
            //스트라이크 계산
            if (userInput[i] === computerInput[i]) {
                strike++;
            }
            for (let a = 0; a < 3; a++) {
                if (userInput[i] == computerInput[a]) {
                    count++;
                }
            }
        }
        ball = count - strike;
        return `${strike}스트라이크 ${ball}볼`;
    }
}

const app = new App();

app.play()

