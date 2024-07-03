"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.usuario");
var _token = require("../middleware/token");
/**
 * Rutas
 * @module Rutas
 */

/**
 * Se utilizo las rutas para poder mostrar, listar, crear, modificar, actualizar, eliminar, loguearse
 * y validar el token
 */

var rutaUsuario = (0, _express.Router)();

//mostrar
rutaUsuario.get("/:id", _controllers.mostrarUsuario);
//listar
rutaUsuario.get("/", _controllers.listarUsuario);
//crear
rutaUsuario.post("/", _controllers.crearUsuario);
//modificar
rutaUsuario.put("/:id", _controllers.modificarUsuario);
//modificar estado usuario
rutaUsuario.put("/estado/:id", _controllers.actualizarEstado);
//eliminar
rutaUsuario["delete"]("/:id", _controllers.eliminarUsuario);
//login
rutaUsuario.post("/loginusuario", _controllers.logueoUsuario);
//Validar token
rutaUsuario.post("/oauth", _token.verifytoken, _controllers.validarToken);
//verificar rol
var _default = exports["default"] = rutaUsuario;