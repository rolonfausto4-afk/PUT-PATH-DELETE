export default class Vista{
    constructor(){
        this.Formulario = document.querySelector(".Formulario");
    }

    ResetearCampos(){
        this.Formulario.reset();
    }

    Redirigir(Ruta){
        location.href = Ruta;
    }
}