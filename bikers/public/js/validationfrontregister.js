window.addEventListener('load', function () {
    const first_name = document.querySelector('input.nameR');
    const last_name = document.querySelector('input.last_nameR');
    const email = document.querySelector('input.emailR');
    const password = document.querySelector('input.passwordR');
    const confirm_password = document.querySelector('input.confirm_passwordR');
    const form = document.querySelector('.form');
    const text = document.querySelector('.text-danger')
    let errores = '';
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let entrar = false;
    text.innerHTML= ""

    form.addEventListener('submit', e => {
        e.preventDefault()

        
            if(first_name.value.length <2 ){
                errores += 'El nombre es muy corto, ';
                entrar = true
            }
            if(last_name.value.length <2 ){
                errores += 'El apellido es muy corto, ';
                entrar = true
            }
            if(!regexEmail.test(email.value)){
                errores += 'El email no es valido, ';
                entrar = true
            }
            if(password.value.length < 8){
                errores += 'La contraseña es muy corta, ';
                entrar = true
            }
            if(confirm_password.value != password.value){
                errores +='Las contraseñas no coinciden.';
                entrar = true
            }

            if(entrar){
                text.innerHTML = errores + '<br>'
            }

    })
})
