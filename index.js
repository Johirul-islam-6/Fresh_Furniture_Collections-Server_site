const express = require('express');
const app = express();
const port = process.env.PROT || 5000;
// Security 
require('dotenv').config()

//Middle ware
app.use(cors());
app.use(express.json())






app.get('/', (req, res) => {
    res.send('furniture server is runing');
})

app.listen(port, () => {
    console.log(`Furniture Server is run ${port}`);
})