const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('connection successful!'))
.catch((err) => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false})); // for url encoding

app.use('/api/auth', authRoute);
app.use('/api/users' , userRoute);



app.listen(3000,() => {
    console.log('listening on port 3000')
})