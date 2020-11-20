const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


// app

console.log('Home');
app.get('/', (req, res) => {
    res.render('index');
});

// app.use((req, res, next) => {
//     console.log(req.url);
//     res.redirect('/contact');
//     next();
// });

app.get('/products', (req, res) => {
    console.log('list');
    products = [
        {id: 1, name: 'Iphone 6'},
        {id: 2, name: 'Iphone 7'},
        {id: 3, name: 'Iphone 8'}
    ]
    res.render('product_list', {products});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Please contact us by email toan@gmail.com'});
});



app.listen(8000, () => {
    console.log('Server is running on port 8000');
})