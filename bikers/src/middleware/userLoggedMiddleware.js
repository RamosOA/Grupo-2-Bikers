const admins = require('./admin');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = true;
    
    let emailInCookie = req.cookies.userEmail
    let userFromCookie = admins.findByFiel(emailInCookie)

    // console.log(userFromCookie)

    if (userFromCookie){
        req.session.userLogged = userFromCookie
    }

    if(req.session.userLogged){
        res.locals.isLogged = false
        res.locals.userLogged = req.session.userLogged
    }



    next()
}

module.exports = userLoggedMiddleware