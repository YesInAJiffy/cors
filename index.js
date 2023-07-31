const express = require('express');

const app = express();



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
