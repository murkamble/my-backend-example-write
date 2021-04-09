const express = require('express');
const env = require('dotenv');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
env.config();
//app.use(bodyParser());
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/inbaazaar', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Databases Connected......');
});

// routes
const authRoutes = require('./routes/auth');
const authAdminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');




// API
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api', authAdminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}......`);
});