import ControladorRegistro from "./Controladores/ControladorRegistro.js";
import ControladorSeleccion from "./Controladores/ControladorSeleccion.js";

import ModeloUsuario from "./Modelos/ModeloUsuario.js";
import Vista from "./Vista/Vista.js";

const ObjVista = new Vista();
const ObjModelo = new ModeloUsuario();

const ObjControladorRegistro = new ControladorRegistro(ObjModelo, ObjVista);
const ObjControladorSeleccion = new ControladorSeleccion(ObjModelo, ObjVista);

const Formulario = ObjVista.Formulario;
const BotonListo = document.querySelector(".Acciones__Boton");

Formulario?.addEventListener("submit", (e)=>{
    e.preventDefault();

    ObjControladorRegistro.ProcesarPost();
})

BotonListo?.addEventListener("click", (e)=>{
    e.preventDefault();

    ObjControladorSeleccion.ProcesarMetodos()
})
