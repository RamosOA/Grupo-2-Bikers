// const admins = require('./admin');
const db = require('../database/models')

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = true;

    // let emailInCookie = req.cookies.userEmail

    // let userFromCookie = await db.User.findAll({
    //     where: {
    //         email: emailInCookie
    //     }
    // })

    // console.log('********************************** '+userFromCookie.email+' *****************************************')

    // let userFromCookie = admins.findByFiel(emailInCookie)

    // if (userFromCookie){
    //     req.session.userLogged = userFromCookie
    // }

    if(req.session.userLogged){
        res.locals.isLogged = false
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

module.exports = userLoggedMiddleware