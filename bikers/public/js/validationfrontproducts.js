window.addEventListener('load', function () {
    const form = document.querySelector('.input-group');
    const articulo = document.querySelector('.form-Articulo');
    const descripcion = document.querySelector('.form-text');
    let errores = '';
    const text = document.querySelector('.text-danger')
    let entrar = false;

    form.addEventListener('submit', e => {
        e.preventDefault()

        
            if(articulo.value.length < 5 ){
                errores += 'El nombre del articulo es muy corto, ';
                entrar = true
            }
            if(descripcion.value.length <20 ){
                errores += 'La descripción del producto es muy corta';
                entrar = true
            }
            

            if(entrar){
                text.innerHTML = errores + '<br>'
            }
    })
})