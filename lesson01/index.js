//1. docker
//2. nginx
// pm2-->node
// js
// const express = require('express');

// const app = express();

// app.listen(8000, ()=> {
//     console.log('Server running on port 8000');
// });

// 165.900.0867:3000
// 165.900.0867:8000


// javascript + typescript--> hoc roi
// mysql + mongodb
// nodejs // commonjs
// express//nestjs

// global.console.log('Hello Javascript');

// window.alert('Hello JS')
// document.getElementById('root').innerHTML = 'Hello'
// const cf = confirm('are you sure');
// if(cf){
//     // delete 
//     console.log('Cau xoa may'); 
// }

// commonJS

// import product from './product';
// console.log(product);

// const {product1,product2} = require('./product');
// console.log(product1, product2);

// Module
//1. global module
//2. 3rd parties module
//3. local module

// const path = require('path');
// console.log(path);
// single thread
// const fs = require('fs');

// fs.readFile('./test.txt', (err, data)=> {
//     if(err){
//         console.log(err);
//     }
//     // console.log(data);
//     console.log(data.toString());
// })

// console.log('Hellllllllooooo');

// 70.000 r/second
// write file
// fs.writeFile('./blog.txt', 'this is the content of the file again', () => {
//     console.log(' file is written');
// });
// if(){}
// if(!fs.existsSync('./docs')){
//     fs.mkdir('./docs', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder is created');
//     })
// } else {
//     fs.rmdir('./docs', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('Remove Directory');
//     })
// }
// console.log(ex);
// if (fs.existsSync('./test.txt')) {
//     fs.unlink('./test.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Removed file');
//     })
// } else {
//     fs.writeFile('./test.txt', 'this is the content of the file again', () => {
//         console.log(' file is written');
//     });
// }
// const os = require('os');
// console.log(os);

const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    res.setHeader('Content-Type', 'application/json')
    // res.write();
    res.json({message: 'success'});
});

server.listen(8000, 'localhost', () => {
    console.log('Server is running on port 8000');
})