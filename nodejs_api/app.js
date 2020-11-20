const express = require('express');
const env = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
env.config();

const port = process.env.PORT || 8080;
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const productRouetes = require('./src/api/products/product.routes');
const userRoutes = require('./src/api/users/user.routes');

app.use('/api/products', productRouetes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});