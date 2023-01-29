window.addEventListener('load', function(){

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    let formularioLogin = document.querySelector('form.NameUser')
    
    formularioLogin.addEventListener('submit', function(e){

        let errores = []

        let email = document.querySelector('input.email')
        if(email.value == ''){
            errores.push('El campo de nombre tiene que estar completo')
        }

        let password = document.querySelector('input.password')
        if(password.value == '' ){
            errores.push('El campo de contraseña tiene que estar completo')
        }

        if(errores.length > 0){
            e.preventDefault()

            let ulErrores = document.querySelector('div.text-danger ul')
            for (let i = 0; i < errores.length; i++) {
                
                ulErrores.innerHTML += '<li>' + errores[i] + "<li>"

            }
        }
    })

})

// window.addEventListener('load', function(){

//     let formulario = document.querySelector('form.NameUser')

//     formulario.addEventListener('submit', function(e){
//         e.preventDefault()

//     })

//     let email = document.querySelector('input.email')

//     email.addEventListener("focus", function(){
//         email.style.borderColor = 'red'
//     })

// })

