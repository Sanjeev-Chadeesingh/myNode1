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

const newData = fs.readFileSync('1-json.json');
const readableData = newData.toString();
const changeableData = JSON.parse(readableData);
changeableData.name = 'Sanjeev';
changeableData.age = 36;
const newJSON = JSON.stringify(changeableData);
fs.writeFileSync('1-json.json', newJSON);