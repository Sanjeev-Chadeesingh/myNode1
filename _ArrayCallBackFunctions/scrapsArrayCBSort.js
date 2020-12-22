//8-17-2020 SORT *mutates the original array with a comparing function
    //you could add a slice to make an actual new array
    //a+b refer to elements in the array
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
let ascSort = prices.sort((a, b) => {
    return a - b;
});
console.log(ascSort);
let descSort = prices.sort((a, b) => {
    return b - a;
});
console.log(descSort);
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
let bookSort = books.sort((a, b) => {
    return a.rating - b.rating
});
console.log(bookSort);