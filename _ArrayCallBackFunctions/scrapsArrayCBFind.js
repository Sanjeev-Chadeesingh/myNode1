//8-14-2020 FIND *returns the first element in the array that satisfies the provided testing function
    //boolean function that needs to return true or false
    //stops after finding first case
let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
];

const firstMrs = movies.find((movie) => {
    return movie.includes('Mrs.');
});
console.log(firstMrs);

const movie2 = movies.find((m) => (
    m.indexOf('Mrs') === 0
));
console.log(movie2);

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
const goodBook = books.find((book) => book.rating >= 4.3);
console.log(goodBook);
console.log(goodRating);