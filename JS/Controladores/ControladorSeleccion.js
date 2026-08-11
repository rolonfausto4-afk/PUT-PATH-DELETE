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
        try {
            const InfoNombre = this.Vista.CampoSeleccionar[0].value;
            const InfoCorreo = this.Vista.CampoSeleccionar[1].value;

            const InfoRespuesta = await this.Modelo.HacerPut(InfoNombre, InfoCorreo);

            this.Vista.AplicarMensaje(InfoRespuesta.Estado >= 200 && InfoRespuesta.Estado < 300  ? "Datos correctamente procesados" : `Algo ha fallado : ${InfoRespuesta.Estado}`);

            this.Modelo.AplicarSesion(InfoRespuesta.Estado >= 200 && InfoRespuesta.Estado < 300  ? InfoRespuesta.Datos : "Falló");

            const InfoMensajeJson = JSON.stringify(this.Modelo.ObtenerSesion(), null, 2);

            this.Vista.AplicarJson(InfoMensajeJson);
            
        } catch (Error) {
            this.Vista.AplicarMensaje(`Ha ocurrido un Error no previsto : ${Error}`);

            const InfoMensajeJson = JSON.stringify("Error");

            this.Vista.AplicarJson(InfoMensajeJson);
        }
    }

    async ProcesarPatch(){
        try {
            const InfoNombre = this.Vista.CampoSeleccionar[0].value;

            const InfoRespuesta = await this.Modelo.HacerPatch(InfoNombre);

            this.Vista.AplicarMensaje(InfoRespuesta.Estado >= 200 && InfoRespuesta.Estado < 300  ? "Datos correctamente procesados" : `Algo ha fallado : ${InfoRespuesta.Estado}`);

            this.Modelo.AplicarSesion(InfoRespuesta.Estado >= 200 && InfoRespuesta.Estado < 300  ? InfoRespuesta.Datos : "Falló");

            const InfoMensajeJson = JSON.stringify(this.Modelo.ObtenerSesion(), null, 2);

            this.Vista.AplicarJson(InfoMensajeJson);
            
        } catch (Error) {
            this.Vista.AplicarMensaje(`Ha ocurrido un Error no previsto : ${Error}`);

            const InfoMensajeJson = JSON.stringify("Error");

            this.Vista.AplicarJson(InfoMensajeJson);
        }
    }

    async ProcesarDelete(){
        try {
            const InfoNombre = this.Vista.CampoSeleccionar[0].value;

            const InfoRespuesta = await this.Modelo.HacerDelete(InfoNombre);

            this.Vista.AplicarMensaje(InfoRespuesta.Estado >= 200 && InfoRespuesta.Estado < 300  ? "Datos correctamente procesados" : `Algo ha fallado : ${InfoRespuesta.Estado}`);

            this.Modelo.AplicarSesion(InfoRespuesta.Estado >= 200 && InfoRespuesta.Estado < 300  ? InfoRespuesta.Datos : "Falló");

            const InfoMensajeJson = JSON.stringify(this.Modelo.ObtenerSesion(), null, 2);

            this.Vista.AplicarJson(InfoMensajeJson);
            
        } catch (Error) {
            this.Vista.AplicarMensaje(`Ha ocurrido un Error no previsto : ${Error}`);

            const InfoMensajeJson = JSON.stringify("Error");

            this.Vista.AplicarJson(InfoMensajeJson);
        }
    }
}