//8-14-2020 MAP *creates a new array with the results of calling a cb on every element in the array
    //store this method in a variable, because it is creating a new array
const nums = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];
const doubles = nums.map((num) => {
    return num * 2;
});
console.log(doubles);

const evenOdd = nums.map((num) => {
    return {
        value: num,
        isEven: num % 2 === 0
    }
});
console.log(evenOdd);

const newAcs = words.map((el) => {
    return el.toUpperCase().split('').join('.');
});
console.log(newAcs);

const duble = nums.map(num => num * 2);
console.log(duble);

const oddEven = nums.map((num) => num % 2 === 0 ? 'even' : 'odd');
console.log('--------------------');
console.log(oddEven);