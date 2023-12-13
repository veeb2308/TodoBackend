const express = require('express');

const ylesanded = [
    {
        kirjeldus: 'Pese hambaid',
        tehtud: false,
        prioriteet: 4
    },
    {
        kirjeldus: 'Jaluta koera',
        tehtud: false,
        prioriteet: 5
    },
];

const app = express();

const tervitus = (req, res) => {
    res.end('Tere Maailm')
}

const tagastaTodoNimekiri = (req, res) => {
    res.json(ylesanded);
}

const lisaTodo = (req, res) => {
    console.log(req.query)
    ylesanded.push({
        kirjeldus: req.query.kirjeldus,
        prioriteet: req.query.prioriteet,
        tehtud: false
    });
    res.status(201).end();
}

const margiTehtuks = (req, res) => {
    //see funktsioon peaks oskama lugeda aadressi:
    https://localhost:5000?indeks=3
    //ja siis muutma ylesannete massiivis 3 elemendi tehtud väärtuse true'ks
    res.status(200).end();
}

app.get('/', tervitus)
app.get('/tervitus', tervitus)
app.get('/api/todo', tagastaTodoNimekiri)

app.get('/api/lisatodo', lisaTodo)
app.get('/api/todotehtud', margiTehtuks);



app.listen(3000)