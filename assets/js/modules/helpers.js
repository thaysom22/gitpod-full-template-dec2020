export { getRandomRange };

// getRandomRange function returns random integer in given range (limits inclusive)
// CREDIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/randCoeff 
function getRandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let output = Math.floor(Math.random() * (max - min + 1) + min);
    return output;
}