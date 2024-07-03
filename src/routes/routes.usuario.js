
/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import { actualizarEstado, crearUsuario, eliminarUsuario,
        listarUsuario, logueoUsuario, modificarUsuario,
        mostrarUsuario, 
        validarToken} from "../controllers/controllers.usuario";
import { verifytoken } from "../middleware/token";


/**
 * Se utilizo las rutas para poder mostrar, listar, crear, modificar, actualizar, eliminar, loguearse
 * y validar el token
 */

const rutaUsuario = Router();

//mostrar
rutaUsuario.get("/:id", mostrarUsuario )
//listar
rutaUsuario.get("/", listarUsuario)
//crear
rutaUsuario.post("/", crearUsuario)
//modificar
rutaUsuario.put("/:id", modificarUsuario)
//modificar estado usuario
rutaUsuario.put("/estado/:id", actualizarEstado)
//eliminar
rutaUsuario.delete("/:id", eliminarUsuario)
//login
rutaUsuario.post("/loginusuario", logueoUsuario);
//Validar token
rutaUsuario.post("/oauth", verifytoken, validarToken);
//verificar rol

export default rutaUsuario;