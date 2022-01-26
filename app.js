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
    console.log(dictator);
    dictators.push(dictator);
});


app.get('/getdictators', (req, res) => {
    res.json(dictators)
});

app.delete('/delete', (req, res) => {
    const dictator = req.body.index;
    dictators.splice(dictator, 1);

});

// app.delete('/delete/:image', (req, res) => {
//     const dictator = req.body.image;
//     dictators = dictators.filter(i => {
//         if (i.image !== image) {
//             return true;
//         }
//         return false;
//     });

// });

app.listen(port, () => console.log(`listening on port ${port}!`));