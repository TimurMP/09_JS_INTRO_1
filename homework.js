const sumDigits = function (x) {
    let sum = 0;
    while (x) {
        let digit = x % 10;
        sum += digit;
        x = (x - digit) / 10;
    }
    return sum;

}

const luckyNumber = function (x) {
    let sum1 = 0;
    let sum2 = 0;
    while (x !== 0) {
        let digit = x % 10;
        x = x / 10;
        sum1 = sum1 + digit;
        digit = x % 10;
        x = x / 10;
        sum2 = sum2 + digit;
    }
    sum1 = Math.ceil(sum1);
    sum2 = Math.ceil(sum2)

    console.log(sum1)
    console.log(sum2)
    if (sum1 === sum2) {
        return true;
    }
}

let res = sumDigits(1234);
console.log(`res = ${res}`)

res = luckyNumber(123871);


console.log(res ? 'lucky' : 'unlucky');
