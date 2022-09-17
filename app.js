const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Routes
const paymentRoute = require('./routes/createPaymentForm');
const validateApiRoute = require('./routes/apiValidate');
const cardVault = require('./routes/cardVaultMethod');

const access_key = process.env.ACCESS_TOKEN;


//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser());
app.use(cors());


//Route Middleware
app.use('/api',paymentRoute);
app.use('/api',validateApiRoute);
app.use('/api',cardVault);

const port = process.env.PORT || 2498;

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})
