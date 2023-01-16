const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


// function admins(email){
//     let userFound = users.find(oneUser => oneUser.email == email)
//     return userFound
// }


const admins = {

    findByFiel: function (correo) {
        let userFound = users.find(oneUser => oneUser.email == correo)
        return userFound  
    }
}

module.exports = admins;