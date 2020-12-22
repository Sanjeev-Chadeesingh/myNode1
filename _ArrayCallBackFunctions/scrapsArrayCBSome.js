//8-17-2020 SOME *similar to every, but returns true if ANY of the array elements pass the test function
const words = ['dog', 'dig', 'log', 'bag', 'wag'];
let threeLetter = words.some((word) => {
    return word[0] === 'd'
});
console.log(threeLetter);
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
let goodRating = books.every((book) => book.rating > 4.1);
console.log(goodRating);
let twoAuthors = books.some((book) => {
    if(book.authors.length > 1) {
        return book;
    }
});
console.log('--------------');
console.log(twoAuthors);