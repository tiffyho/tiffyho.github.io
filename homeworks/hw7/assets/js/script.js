
function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    let text1 = "On average, a Berkeley student has ";
    let text2 = "s. ";
    return text1.concat(num, " ", noun, text2);
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "dog")

console.log(sentence); 