const { faker } = require('@faker-js/faker');

function generatePerson() {

    return {
        username: faker.internet.userName(),
        email: faker.internet.email(),
    };
}

module.exports = generatePerson;