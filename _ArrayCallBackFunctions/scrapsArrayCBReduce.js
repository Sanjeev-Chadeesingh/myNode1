//8-17-2020 REDUCE *executes a reducer function on each element of the array, RESULTING IN A SINGLE VALUE
    //summing an array (common example)
    //maximum value in an array
    //tallying votes or data
    /* 
    let someThing = array.reduce((accumulator, currentValue) => {
        return doSomething;
    })
    -accumulator is the starting element of the array
    -currentValue is the next value in the array
    */
const nums = [3, 4, 5, 6, 7];
let newNums = nums.reduce((total, cV) => {
    return cV * total;
})
console.log(newNums);
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
let hiGrade = grades.reduce((total, cV) => {
    // if(cV > total) {
    //     return cV;
    // } else {
    //     return total;
    // }
    //**above is my long way, below is their short way**
    if(cV > total) return cV;
    return total;
});
console.log(hiGrade);
let maxGrade = grades.reduce((total, cV) => {
    return Math.max(total, cV);
})
console.log(maxGrade);
let sum = [10, 20, 30, 40, 50].reduce((total, cV) => {
    return total + cV;
}, 100);
//initial value(100) to give it somewhere to start from
console.log(sum);