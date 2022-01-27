const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//A place to store the dictators.
let dictators = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Adding the dictator to the array of dictators
app.post('/postdictators', (req, res) => {
    const dictator = req.body;
    dictators.push(dictator);
    dictators[dictators.length - 1].index = dictators.length - 1;
    console.log(dictator);
});

//getting the dictators
app.get('/getdictators', (req, res) => {
    res.json(dictators)
    console.log(dictators);
});

//deleting a specific dictator in the array by finding the right index based on the params in adress
app.delete('/deletedictators/:index', (req, res) => {
    const { index } = req.params;
    const dictatorIndex = dictators.findIndex(p => p.index == index)
    dictators.splice(dictatorIndex, 1);
    return res.send();
});

app.listen(port, () => console.log(`listening on port ${port}!`));