const express = require('express');
const app = express();

var cors = require('cors');




app.use(cors({
    origin: 'https://www.google.com'
}));


const accounts = [
    {
        "id": "101",
        "accountholder": "Leonardo"
    },
    {
        "id": "102",
        "accountholder": "Kate"
    },
    {
        "id": "103",
        "accountholder": "Brad"
    },
    {
        "id": "104",
        "accountholder": "Tom"
    }
];

app.get('/accounts', (req, res) =>{
    res.send(accounts);
});


app.options('/accounts/:id', cors()) // enable pre-flight request for DELETE request

app.delete('/accounts/:id', cors(), function (req, res, next) {
  res.json({msg: 'Delete call received at server'})
})

app.listen(8085);
