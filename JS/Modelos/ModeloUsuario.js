export default class ModeloUsuario{
    async HacerPost(Formulario){
        const DatosFormulario = new FormData(Formulario);

        const Respuesta = await fetch("https://httpbin.org/post",{
            method: 'post',
            body: DatosFormulario
        });

        const InfoRespuesta = await Respuesta.json();

        return InfoRespuesta;
    }

    AplicarSesion(DatoInfo){
        sessionStorage.setItem("DatoInfo", JSON.stringify(DatoInfo));
    }

}

