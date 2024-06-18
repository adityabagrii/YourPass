const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
const cors = require('cors')


dotenv.config()

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'yourpass';
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())

client.connect();

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// Save a new password
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // Wrap password in an object
    const findResult = await collection.insertOne(password);
    res.send({ success: true, result: findResult })
})

// Delete a password
app.delete('/', async (req, res) => {
    const password = req.body; // Assuming the password is sent in the body directly
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    // Construct a query object to specify the delete criteria
    const findResult = await collection.deleteOne({ id: password.id });
    res.send({ success: true, result: findResult });
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})