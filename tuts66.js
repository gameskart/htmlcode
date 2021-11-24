import '../JavaScript Tutorial/index'
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
let d1 = document.getElementById('btn');
let fileContent = fs.writeFile("temp.txt", d1, {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
}, function (err, data) {
    console.log(err, data);

});

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'content/type': 'text/plain' });
    res.setHeader('Content-Type', 'text/plain');
    res.end(fileContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// const http = require('http');
// const fs = require('fs');

// const fileContent = fs.readFileSync('tuts61.html')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content- type' : 'text / html'});
//     res.end(fileContent);
// });

// server.listen(80, '127.0.0.1', () => {
//     console.log('Listening on port 80');
// });






// // Node.js program to demonstrate
// // the fs.readFile() method

// // Include fs module
// var fs = require('fs');

// // Use fs.readFile() method to read the file
// fs.readFile('Demo.txt', 'utf8', function (err, data) {

//     // Display the file content
//     console.log(data);
// });

// console.log('readFile called');
