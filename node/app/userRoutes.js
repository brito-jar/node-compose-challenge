const express = require('express');
const connection = require('./database');
const generatePerson = require('./person');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const person = generatePerson();
        await savePerson(person);
        const people = await getPeople();
        res.json(people);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao buscar as pessoas');
    }
});

function savePerson(person) {
    return new Promise((resolve, reject) => {
                const sql = 'INSERT INTO people (name, email) VALUES (?, ?)';
        const values = [person.username, person.email];

        connection.query(sql, values, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                console.log('Pessoa cadastrada com sucesso!');
                resolve(results);
            }
        });
    });
}

function getPeople() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM people';

        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = router;
