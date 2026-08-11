export default class ModeloUsuario{
    async HacerDelete(){
        try {
            const Respuesta = await fetch("https://httpbin.org/delete",{
                method: 'DELETE'
            });

            if(!Respuesta.ok){
                return {
                    Valido: false,
                    Estado: Respuesta.status,
                    Mensaje: "Error del Servidor",
                    Datos: "Sin sistema"
                }
            }

            const InfoRespuesta = await Respuesta.json();

            return {
                Valido: true,
                Mensaje: "Datos han sido Eliminados",
                Datos: InfoRespuesta
            }

        } catch (Error) {
            return {
                Valido: false,
                Estado: "Sin Conexion",
                Mensaje: `Ha ocurrido un error: ${Error.message}`,
                Datos: "Error de conexion"
            } 
        }
    }
    
    async HacerPut(DatoNombre, DatoCorreo){
        try {
            const Respuesta = await fetch("https://httpbin.org/put",{
                method: 'PUT',
                body: JSON.stringify({
                    Nombre: DatoNombre,
                    Correo: DatoCorreo
                })
            });

            if(!Respuesta.ok){
                return {
                    Valido: false,
                    Estado: Respuesta.status,
                    Mensaje: "Error del Servidor",
                    Datos: "Sin sistema"
                }
            }

            const InfoRespuesta = await Respuesta.json();

            return {
                Valido: true,
                Mensaje: "Datos han sido validados",
                Datos: InfoRespuesta
            }

        } catch (Error) {
            return {
                Valido: false,
                Estado: "Sin Conexion",
                Mensaje: `Ha ocurrido un error: ${Error.message}`,
                Datos: "Error de conexion"
            } 
        }
    }
    
    async HacerPatch(DatoNombre){
        try {
            const Respuesta = await fetch("https://httpbin.org/patch",{
                method: 'PATCH',
                body: JSON.stringify({
                    Nombre: DatoNombre
                })
            });

            if(!Respuesta.ok){
                return {
                    Valido: false,
                    Estado: Respuesta.status,
                    Mensaje: "Error del Servidor",
                    Datos: "Sin sistema"
                }
            }

            const InfoRespuesta = await Respuesta.json();

            return {
                Valido: true,
                Mensaje: "Datos han sido validados",
                Datos: InfoRespuesta
            }

        } catch (Error) {
            return {
                Valido: false,
                Estado: "Sin Conexion",
                Mensaje: `Ha ocurrido un error: ${Error.message}`,
                Datos: "Error de conexion"
            } 
        }
    }

    async HacerPost(DatoFormulario){
        const InfoFormulario = new FormData(DatoFormulario);
        
        const Respuesta = await fetch("https://httpbin.org/post",{
            method: 'POST',
            body: InfoFormulario
        });

        if(!Respuesta.ok){
            this.ObtenerError(Respuesta.status);
        }

        const InfoRespuesta = await Respuesta.json();

        return InfoRespuesta;
    }

    AplicarSesion(DatoInfo){
        sessionStorage.setItem("DatoInfo", JSON.stringify(DatoInfo));
    }

    ObtenerSesion(){
        return JSON.parse(sessionStorage.getItem("DatoInfo"))
    }
}

