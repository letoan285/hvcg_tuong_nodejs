const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.body);
    let path = './views/';
    switch(req.url){
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact': 
            path += 'contact.html';
            res.statusCode = 200;
            break;
        case '/products': 
            path += 'product_list.html';
            res.statusCode = 200;
            break;
        default:
            path += 'notfound.html';
            res.statusCode = 400;  
            break;
    }
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});


server.listen(8000, 'localhost', () => {
    console.log('Server running on port 8000');
});

// status code
// 200, 201, success, created
// 300, 301, 302, url has changed
// 400, 404, bad requrest, not found
// 500 , unauthorized