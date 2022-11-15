const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function admins (req,res,next) {
    let admin = req.body.login_name
    let password = req.body.login_password
    if(admin) {
        users.forEach(function (persona) {
            if(admin == persona.email & password==persona.password & persona.categoria=="admin"){
                next()
            }
        })
        res.redirect('/login')
    }else{
        res.redirect('/login')
    }
}

module.exports = admins;

