import ControladorPost from "./Controladores/ControladorPost.js";

import ModeloUsuario from "./Modelos/ModeloUsuario.js";
import Vista from "./Vista/Vista.js";

const ObjVista = new Vista();
const ObjModelo = new ModeloUsuario();

const ObjControladorPost = new ControladorPost(ObjModelo, ObjVista);

const Formulario = ObjVista.Formulario;

Formulario?.addEventListener("submit", (e)=>{
    e.preventDefault();

    ObjControladorPost.ProcesarPost();
})

