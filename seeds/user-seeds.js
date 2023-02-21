const { User } = require('../models');

[
    {
        "name": "Jim",
        "email": "Jim@aol.com",
        "password": "truthconnection"
    },
    {
        "name": "Harry",
        "email": "harry@yahoo.com",
        "password": "password1234"
    },
    {
        "name": "Timmy",
        "email": "Timothy@gmail.com",
        "password": "password123"
    }
]

const seedUser = () => Tag.bulkCreate(userData);

module.exports = seedUser;