const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//A place to store the dictators.
let dictators = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/*

KBK: Din gamle kode. Som du kan se returnerer din post ikke noget data, og derfor opdaterede dine observable
    ikke i Angular. Jeg har nu lavet den, så den returnerer. Det kan du fjerne hvis du vil, da koden er
    rettet i din Angular service til at håndtere det. Det er dog mest korrekt at returnere en 
    201 created http status kode, og sende det nye objekt med

    Jeg er usikker på hvad du vil med denne her??: 
    dictators[dictators.length - 1].index = dictators.length - 1; 

app.post('/postdictators', (req, res) => {
    const dictator = req.body;
    dictators.push(dictator);
    dictators[dictators.length - 1].index = dictators.length - 1;
    console.log(dictator);
});
*/

//Adding the dictator to the array of dictators
app.post('/postdictators', (req, res) => {
    const dictator = req.body;
    console.log('dictator', dictator);
    dictators.push(dictator);
    //dictators[dictators.length - 1].index = dictators.length - 1;
    //console.log(dictator);
    res.status(201).send(dictators[dictators.length - 1])

});


/*
KBK: Din gamle kode. Der er ingen grund til at JSON'ifie din return her. Husk webapi deklaration er:
    JSON in - JSON out

//getting the dictators
app.get('/getdictators', (req, res) => {
    res.json(dictators)
    console.log(dictators);
});
*/

//getting the dictators
app.get('/getdictators', (req, res) => {
    //console.log('getDictators')
    res.status(200).send(dictators)
    //console.log(dictators);
    
});

/*
KBK: Din gamle kode
Jeg har rettet en del til i din delete. bemærk følgende i forbindelse med debug:
linje 82: index 2
Linje 83: dictatorIndex -1


//deleting a specific dictator in the array by finding the right index based on the params in adress
app.delete('/deletedictators/:index', (req, res) => {
    const { index } = req.params;
    const dictatorIndex = dictators.findIndex(p => p.index == index)
    dictators.splice(dictatorIndex, 1);
    return res.send();
});
*/

//deleting a specific dictator in the array by finding the right index based on the params in adress
app.delete('/deletedictators/:index', (req, res) => {
    const index  = req.params.index;
    console.log('index', index)
    //const dictatorIndex = dictators.findIndex(p => p.index == index)
    //console.log('dictatorndex', dictatorIndex)
    //dictators.splice(dictatorIndex, 1);
    dictators.splice(index, 1)
    console.log('dictators after delete: ', dictators)
    return res.status(204).send();
});
app.listen(port, () => console.log(`listening on port ${port}!`));