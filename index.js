const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());

// user: user1db
// password: ZSIYKzXoo0deQvjP



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ikqdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const inventoryCollection = client.db('wearHouse').collection('inventory');

        app.get('/inventory', async (req, res) =>{
            const query={};
            const cursor = inventoryCollection.find(query);
            const inventories = await cursor.toArray();
            res.send(inventories);
        })

    }
    finally{

    }
}
run().catch(console,dir);


app.get('/', (req, res) =>{
    res.send('wearhouse running');
});

app.listen(port, () =>{
    console.log('Listening to port' , port);
})