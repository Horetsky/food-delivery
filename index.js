const express = require('express');
const path = require('path');

const fs = require('fs');
const crypto = require("crypto")
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require('./db.json')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/products", (req, res) => {
    res.json(db.products)
})
app.get("/shops", (req, res) => {
    res.json(db.shops)
})

app.post("/order", (req, res) => {
    fs.readFile('./db.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        writeData(JSON.parse(data))
   })
   
   const writeData = (data) => {
    const uuid = crypto.randomUUID()
    const arr = []
    arr.push(...data.orderHistory)

    const history = arr.push({
        "id": uuid,
        "order": req.body
    })

    const config = {
        ...data,
        orderHistory: arr
    }

    try {
        fs.writeFileSync('./db.json', JSON.stringify(config, null, 2), 'utf8');
        console.log('Data successfully saved to disk');
      } catch (error) {
        console.log('An error has occurred ', error);
      }
   }
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);