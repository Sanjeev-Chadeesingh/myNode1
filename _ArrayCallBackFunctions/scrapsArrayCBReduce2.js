//8-17-2020 REDUCE 2 
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
let results = votes.reduce((tally, val) => {
    if(tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1
    }
    return tally;
}, {})
console.log(results);
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
    rating: 3.11
},
{
    title: 'A Gentleman In Moscow',
    authors: ['Amor Towles'],
    rating: 3.36
}];
let result2 = books.reduce((groupedBooks, book) => {
    let key = Math.floor(book.rating);
    if(!groupedBooks[key]) {
        groupedBooks[key] = [];
    } else {
        groupedBooks[key].push(book);
    }
    
    return groupedBooks;
}, {})
console.log(result2);
