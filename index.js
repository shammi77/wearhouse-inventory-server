const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();


// middleware
app.use(cors());
app.use(express.json());

// user: user1db
// password: ZSIYKzXoo0deQvjP





app.get('/', (req, res) =>{
    res.send('wearhouse running');
});

app.listen(port, () =>{
    console.log('Listening to port' , port);
})