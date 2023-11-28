export function generateThreeRandomNumber(): number {
    const numberRule = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffleNumbers = shuffleNumber(numberRule).slice(0, 3);
    return parseInt(shuffleNumbers.join(''));
}

function shuffleNumber(numberArray: number[]): number[] {
    for (let index = numberArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [numberArray[index], numberArray[randomIndex]] = [numberArray[randomIndex], numberArray[index]];
    }
    return numberArray;
}