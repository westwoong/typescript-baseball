export function validateInputNumber(inputNumber: string) {
    validateIsNumber(inputNumber);
    validateIsDuplicate(inputNumber);
}

function validateIsNumber(input: string) {
    const validateRule = /^[1-9]{3}$/;
    if (!validateRule.test(input)) throw new Error('유효하지 않은 입력, 1~9까지 서로 다른 3자리 수를 입력해주세요.');
}

function validateIsDuplicate(input: string) {
    const uniqueNumber = new Set(input);
    if (uniqueNumber.size !== 3) throw new Error('중복된 숫자가 있습니다. 서로 다른 숫자를 입력하세요.');
}