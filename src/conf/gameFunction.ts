export function generateThreeRandomNumber(): number {
    const numberRule = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffleNumbers = shuffleNumber(numberRule).slice(0, 3);
    return parseInt(shuffleNumbers.join(''));
}

export function resultGameValue(userInput: string, computerInput: string): string {
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

function shuffleNumber(numberArray: number[]): number[] {
    for (let index = numberArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [numberArray[index], numberArray[randomIndex]] = [numberArray[randomIndex], numberArray[index]];
    }
    return numberArray;
}