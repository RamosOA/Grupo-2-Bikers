const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const db = require("../database/models")


// function admins(email){
//     let userFound = users.find(oneUser => oneUser.email == email)
//     return userFound
// }

async function findByEmail (mail){
    if(mail){
        
        let usuario = await db.User.findOne({
            where: {
                email: mail
            }
        })
        try {return mail}
        catch {return console.log(mail)}
    } else {
        return null
    }
}

const admins = {



    // findByEmail: function (correo) {

    //        db.User.findOne({
    //         where: {
    //             email: correo
    //         }
    //     })
    //         .then(correo => {
    //             return correo
    //         })
    //         console.log("######################  "+correo+"  ###########################")
    // },

    //     let userFound = users.find(oneUser => oneUser.email == correo)
    //     return userFound  
    // }
}

module.exports = findByEmail();