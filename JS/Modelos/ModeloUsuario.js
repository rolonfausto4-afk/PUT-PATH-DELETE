export default class ModeloUsuario{
    async HacerDelete(DatoNombre){
        const InfoRespuesta = await fetch("https://httpbin.org/delete",{
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Nombre: DatoNombre,
                Correo: ""
            })
        });

        return {
            Estado: InfoRespuesta.status,
            Datos: await InfoRespuesta.json()
        }
    }
    
    async HacerPut(DatoNombre, DatoCorreo){
        const InfoRespuesta = await fetch("https://httpbin.org/put",{
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Nombre: DatoNombre,
                Correo: DatoCorreo
            })
        });

        return {
            Estado: InfoRespuesta.status,
            Datos: await InfoRespuesta.json()
        }
    }
    
    async HacerPatch(DatoNombre){
        const InfoRespuesta = await fetch("https://httpbin.org/patch",{
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Nombre: DatoNombre,
            })
        });

        return {
            Estado: InfoRespuesta.status,
            Datos: await InfoRespuesta.json()
        }
    }

    async HacerPost(DatoFormulario){
        const InfoFormulario = new FormData(DatoFormulario);
        
        const InfoRespuesta = await fetch("https://httpbin.org/post",{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Nombre: InfoFormulario.get("Nombre"),
                Correo: InfoFormulario.get("Correo")
            })
        });

        return {
            Estado: InfoRespuesta.status,
            Datos: await InfoRespuesta.json()
        }
    }

    AplicarSesion(DatoInfo){
        sessionStorage.setItem("DatoInfo", JSON.stringify(DatoInfo));
    }

    ObtenerSesion(){
        return JSON.parse(sessionStorage.getItem("DatoInfo"))
    }
}

