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
    console.log(dictator);
});

//getting the dictators
app.get('/getdictators', (req, res) => {
    res.json(dictators)
    console.log(dictators);
});

//deleting a specific dictator in the array
app.delete('/deletedictators', (req, res) => {
    const dictator = req.body.index;
    dictators.splice(dictator, 1);
    console.log(dictators);

});

app.listen(port, () => console.log(`listening on port ${port}!`));