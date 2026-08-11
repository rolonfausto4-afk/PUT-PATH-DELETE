export default class Vista{
    constructor(DatoActualSesion){
        this.Formulario = document.querySelector(".Formulario");
        this.SeleccionarMetodo = document.querySelector(".Acciones__Metodo");
        this.CampoSeleccionar = document.querySelectorAll(".Acciones__Campo");
        this.MensajeJson = document.querySelector(".Respuesta__Json");
        this.MensajeRespuesta = document.querySelector(".Respuesta__Mensaje");

        this.AccionarSeleccionar();
        this.AplicarJson(DatoActualSesion);
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
                this.CampoSeleccionar[1].style.display = this.SeleccionarMetodo.value !== "Put" ? "none" : "inline";
            }
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
        if(this.MensajeJson){
            this.MensajeJson.innerText = DatoJson;
        }
            
    }
}