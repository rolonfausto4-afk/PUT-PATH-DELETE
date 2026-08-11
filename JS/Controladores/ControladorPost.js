export default class ControladorPost{
    constructor(Modelo, Vista){
        this.Modelo = Modelo;
        this.Vista = Vista;
    }

    async ProcesarPost(){
        const JsonInfo = await this.Modelo.HacerPost(this.Vista.Formulario);

        this.Modelo.AplicarSesion(JsonInfo);

        this.Vista.ResetearCampos();

        this.Vista.Redirigir("../HTML/SeleccionCambioEliminar.html");
    }
}