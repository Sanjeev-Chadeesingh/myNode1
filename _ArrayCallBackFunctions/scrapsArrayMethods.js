// 7-29-2020 TAKIN STOCK CONTINUED  concat:merge arrays |includes:look for a value+return boolean |indexOf: str.indexOf() |join:creates a new string from arr |reverse |slice:copy portion of arr|splice: remove/replace |sort
    //fux in with arrays
    // CONCAT|INCLUDES|INDEXoF|JOIN|REVERSE|SLICE|SPLICE
    const exOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const exTwo = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const exThree = ['dog', 'cat', 'fox', 'grapes', 'cherries', 'oranges', 'driver', 'putter', 'wedge', 'colt', 'glock', 'beretta'];
    // let exThree = exOne.concat(exTwo);
    // console.log(exThree);
    // console.log(exTwo.includes(12));
    // console.log(exOne.indexOf(3));
    // console.log(exTwo.join('fux'));
    // console.log(exTwo.reverse());
    // let exFour = exThree.slice(3, 9);
    // console.log(exFour);
    exThree.splice(3, 3, 'apple', 'samsung', 'motorola');
    console.log(exThree);
    const randNums = [23, 4, 567, 456346, 23, 6 , 12, 65, 99, 0];
    let sortedNums = randNums.sort((a, b) => {
        return a - b;
    });
    console.log(sortedNums);
    let test = exThree.reverse();
    console.log(test);