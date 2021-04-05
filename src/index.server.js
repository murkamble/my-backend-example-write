const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
env.config();
app.use(bodyParser());
mongoose.connect(
    'mongodb://localhost:27017/inbaazaar', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Databases Connected.....');
});

// routes
const authRoutes = require('./routes/auth');




// API
app.use('/api', authRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}......`);
});