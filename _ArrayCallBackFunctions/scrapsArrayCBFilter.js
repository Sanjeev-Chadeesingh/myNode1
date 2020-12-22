//8-17-2020 FILTER *Creates a new array with all elements that pass the test implemented by the provided function
    //pass a function which returns true or false, if element passes, it gets put into the result array
    //filter out subsets of an array. creates a copy with specifically targeted information
const nums = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let evens = nums.filter((num) => {
    return num % 2 === 0;
});
console.log(evens);
console.log(nums);
let bigNums = nums.filter(num => num > 25);
console.log(bigNums);
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman In Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}];

let goodRating = books.find((book) => {
    if(book.rating >= 4.3) {
        return book;
    }
});
const badBook = books.filter(b => b.rating < 4.2);
console.log(badBook);
const query = 'The';
let results = books.filter((book) => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
})
console.log(results);