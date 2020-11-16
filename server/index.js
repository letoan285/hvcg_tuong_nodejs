const express = require('express');
const env = require('dotenv');

const app = express();
env.config();

const port = process.env.PORT || 8000;
const productRoutes = require('./src/routes/product.routes');
const userRoutes = require('./src/routes/user.routes');
const categoryRoutes = require('./src/routes/user.routes');

// app.get('/', (req, res) => {
//     res.json({message: 'Successfull', data: [{id: 1}]})
// })

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})