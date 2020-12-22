//8-17-2020 EVERY *tests whether ALL elements in the array pass the provided function. Returns a boolean
    //takes a boolean cb, runs on every element in the array, if all pass test by cb, returns true(all elements end in 'g')
const words = ['dog', 'dig', 'log', 'bag', 'wag'];
let wordG = words.every((word) => word.length === 3);
console.log(wordG);
let wordLength = words.every((word) => {
    const last  = word.length - 1;
    return word[last] === 'g';
});
console.log(wordLength);