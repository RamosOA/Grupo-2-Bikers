const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const usersFilePath = path.join(__dirname, '../data/users.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const db = require('../database/models');

const userController = {
    create:  async function(req, res){
        let contra;
        const resultValidation = validationResult(req); 
        try {
            if (req.body.password == req.body.confirm_password){
                contra = req.body.password;

                const [user, created] = await db.User.findOrCreate({
                    where: { email: req.body.email },
                    defaults: {
                        first_name: req.body.name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password:  bcrypt.hashSync(contra, 10),
                        category: req.body.categoria  
                    }
                });

                if(resultValidation.errors.length > 0){
                    return res.render('register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                    });
                }

                if (created) {
                    res.redirect('/');
                } else {
                    res.resnder('register')
                }

            }
        } catch (error) {
            res.redirect('/singUp')
        }
    },
}

module.exports = userController;
