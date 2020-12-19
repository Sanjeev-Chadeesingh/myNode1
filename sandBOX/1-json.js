const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

//working with JSON!!
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const readableData = dataBuffer.toString();
const JSData = JSON.parse(readableData);
JSData.name = 'Andrew';
JSData.age = 27;
const newJSON = JSON.stringify(JSData);
fs.writeFileSync('1-json.json', newJSON);