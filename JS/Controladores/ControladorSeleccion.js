export default class ControladorSeleccion{
    constructor(Modelo, Vista){
        this.Modelo = Modelo;
        this.Vista = Vista;
    }

    ProcesarMetodos(){
        switch(this.Vista.SeleccionarMetodo.value){
            case "Put":
                this.ProcesarPut();
                break
            case "Patch":
                this.ProcesarPatch();
                break
            case "Delete":
                this.ProcesarDelete();
        }

        this.Vista.ResetearCamposSeleccion();
    }


    async ProcesarPut(){ //De todos Valido,Datos,Mensaje en error estatus
        const InfoNombre = this.Vista.CampoSeleccionar[0].value;
        const InfoCorreo = this.Vista.CampoSeleccionar[1].value;

        const InfoJson = await this.Modelo.HacerPut(InfoNombre, InfoCorreo);

        this.Vista.AplicarMensaje(InfoJson.Valido ? InfoJson.Mensaje : `${InfoJson.Mensaje} : ${InfoJson.Estado}`);

        this.Modelo.AplicarSesion(InfoJson.Datos);

        const InfoMensajeJson = JSON.stringify(this.Modelo.ObtenerSesion(), null, 2);

        this.Vista.AplicarJson(InfoMensajeJson);
    }

    async ProcesarPatch(){
        const InfoNombre = this.Vista.CampoSeleccionar[0].value;

        const InfoJson = await this.Modelo.HacerPatch(InfoNombre);

        this.Vista.AplicarMensaje(InfoJson.Valido ? InfoJson.Mensaje : `${InfoJson.Mensaje} : ${InfoJson.Estado}`);

        this.Modelo.AplicarSesion(InfoJson.Datos);

        const InfoMensajeJson = JSON.stringify(this.Modelo.ObtenerSesion(), null, 2);

        this.Vista.AplicarJson(InfoMensajeJson);
    }

    async ProcesarDelete(){
        const InfoJson = await this.Modelo.HacerDelete();

        this.Vista.AplicarMensaje(InfoJson.Valido ? InfoJson.Mensaje : `${InfoJson.Mensaje} : ${InfoJson.Estado}`);

        this.Modelo.AplicarSesion(InfoJson.Datos);

        const InfoMensajeJson = JSON.stringify(this.Modelo.ObtenerSesion(), null, 2);

        this.Vista.AplicarJson(InfoMensajeJson);
    }
}