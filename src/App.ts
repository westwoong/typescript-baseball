import * as readlineSync from 'readline-sync';

export class App {
    async play() {
        console.log('숫자 야구 게임을 시작합니다.');
        const number = readlineSync.question('숫자를 입력해주세요 : ');
        console.log(number);
    }
}

const app = new App();

app.play()

