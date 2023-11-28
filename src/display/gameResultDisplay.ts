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