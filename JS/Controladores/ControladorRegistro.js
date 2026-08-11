export default class ControladorRegistro{
    constructor(Modelo, Vista){
        this.Modelo = Modelo;
        this.Vista = Vista;
    }

    async ProcesarPost(){
        const InfoJson = await this.Modelo.HacerPost(this.Vista.Formulario);

        this.Modelo.AplicarSesion(InfoJson.Datos);

        this.Vista.ResetearCampos();

        this.Vista.Redirigir("../HTML/SeleccionCambioEliminar.html");
    }
}