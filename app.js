const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/getDictators', (req, res) => {
    // const firstName=req.body.firstName;
    // const lastName=req.body.lastName;
    // const born=req.body.born;
    // const death=req.body.death;
    // const description=req.body.description;

    // res.send({'firstName':firstName, 'lastName':lastName, 'born':born, 'death':death, 'description':description})
    res.send('there is life on the moon!')
});

app.post('/postDictators', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const born = req.body.born;
    const death = req.body.death;
    const description = req.body.description;

    res.send({ 'firstName': firstName, 'lastName': lastName, 'born': born, 'death': death, 'description': description })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});