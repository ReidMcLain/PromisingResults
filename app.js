// slowMath.add(1, 1).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.divide(num, 4);
// }).then(num => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 98);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 40);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 32);
// }).then(num => {
//     console.log(`The final result is ${num}.`)
// }).catch(err => {
//     console.log(err);
// });

let doMath = async function() {
    try {
        let message 
        message = await slowMath.add(6, 2);
        console.log(message);
        message = await slowMath.multiply(message, 2);
        console.log(message);
        message = await slowMath.divide(message, 4);
        console.log(message);
        message = await slowMath.subtract(message, 3);
        console.log(message);
        message = await slowMath.add(message, 98);
        console.log(message);
        message = await slowMath.remainder(message, 2);
        console.log(message);
        message = await slowMath.multiply(message, 50);
        console.log(message);
        message = await slowMath.remainder(message, 40);
        console.log(message);
        message = await slowMath.add(message, 32);
        console.log(`The final result is ${message}.`);
    }
    catch (error) {
        console.log(error);
    }
}

doMath();