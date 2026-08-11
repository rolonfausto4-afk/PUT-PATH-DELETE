export default class Vista{
    constructor(){
        this.Formulario = document.querySelector(".Formulario");
        this.SeleccionarMetodo = document.querySelector(".Acciones__Metodo");
        this.CampoSeleccionar = document.querySelectorAll(".Acciones__Campo");
        this.MensajeJson = document.querySelector(".Respuesta__Json");
        this.MensajeRespuesta = document.querySelector(".Respuesta__Mensaje");

        this.AccionarSeleccionar();
    }

    ResetearCampos(){
        this.Formulario.reset();
    }

    ResetearCamposSeleccion(){
        for(let i = 0; i < this.CampoSeleccionar.length ; i++){
                this.CampoSeleccionar[i].value= "";
            }
    }

    Redirigir(Ruta){
        location.href = Ruta;
    }

    EliminarCampo(){
        for(let i = 0; i < this.CampoSeleccionar.length ; i++){
                this.CampoSeleccionar[i].style.display = this.SeleccionarMetodo.value === "Delete" ? "none" : "inline";
            }

        if(this.SeleccionarMetodo.value === "Patch"){this.CampoSeleccionar[1].style.display = "none"; }
    }

    AccionarSeleccionar(){
        this.SeleccionarMetodo?.addEventListener("change", (e)=>{
            this.EliminarCampo();
        })
    }

    AplicarMensaje(DatoMensaje){
        this.MensajeRespuesta.textContent = DatoMensaje;
    }

    AplicarJson(DatoJson){
        this.MensajeJson.innerText = DatoJson;
    }
}