const express=require('express');
const app=express();
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
require('./db/config');

const cors=require('cors')

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log('Server is listening on port 8000');
});