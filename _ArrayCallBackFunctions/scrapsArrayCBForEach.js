//8-14-2020 FOREACH *accepts a cb function|calls function once per each element in the array
    //can pass index as second arg.
    //does not store or make new arrays
const nums = [20, 21, 22, 23, 24, 25, 26, 27];

nums.forEach((num => console.log(num * 2)));
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
books.forEach((book => {
    console.log(book.title);
}))
for(let i = 0; i < books.length; i++) {
    console.log(books[i].title);
}
nums.forEach((num, idx) => {
    console.log(`${idx}: ${num}`);
})

const bookTitles = books.map((book) => {
    return book.title;
});
console.log(bookTitles);