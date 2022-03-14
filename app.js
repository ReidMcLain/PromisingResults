//Promise.then chaining

// slowMath.add(1, 1).then(res => {
//     console.log(res);
//     return slowMath.multiply(res, 2);
// }).then(res => {
//     console.log(res);
//     return slowMath.divide(res, 4);
// }).then(res => {
//     console.log(res);
//     return slowMath.subtract(res, 3);
// }).then(res => {
//     console.log(res);
//     return slowMath.add(res, 98);
// }).then(res => {
//     console.log(res);
//     return slowMath.remainder(res, 2);
// }).then(res => {
//     console.log(res);
//     return slowMath.multiply(res, 50);
// }).then(res => {
//     console.log(res);
//     return slowMath.remainder(res, 40);
// }).then(res => {
//     console.log(res);
//     return slowMath.add(res, 32);
// }).then(res => {
//     console.log(`The final result is ${res}.`)
// }).catch(error => {
//     console.log(error);
// });

// Async/await

let doMath = async function() {
    try {
        let message; 
         
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