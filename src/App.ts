import * as readlineSync from 'readline-sync';

export class App {
    async play() {
        console.log('숫자 야구 게임을 시작합니다.');
        const number = readlineSync.question('숫자를 입력해주세요 : ');
        console.log(number);
        const test = this.shuffleNumber([1, 2, 3, 4, 5]);
        console.log(test);
        console.log(test.length);
    }

    private shuffleNumber(numberArray: number[]): number[] {
        // i == 배열의 길이(5) -1  , 4 , i가 0보다 클때까지만 i의 값을 뺀다. 4번 돌아간다  ;
        for (let i = numberArray.length - 1; i > 0; i--) {
            // 랜덤 변수 하나 4가 들어오면 4+1 5가된다 랜덤난수를 곱해서 소수점을 떨굼
            console.log('-----i-----')
            console.log(i);
            console.log('-----i-----')
            const randomIndex = Math.floor(Math.random() * (i + 1));
            console.log('-----R-----')
            console.log(randomIndex);
            console.log('-----R-----');
            // i = 4 , random = 0 ,                          0 ,   4
            [numberArray[i], numberArray[randomIndex]] = [numberArray[randomIndex], numberArray[i]];
        }
        return numberArray;
    }
}

const app = new App();

app.play()

