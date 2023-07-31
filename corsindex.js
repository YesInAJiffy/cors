const express = require('express');
const app = express();

var cors = require('cors');

app.use(cors())

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



app.listen(8085);
