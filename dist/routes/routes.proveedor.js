"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.proveedor");
/**
 * Rutas
 * @module Rutas
 * 
 */

/**
 * Se utilizo las rutas proveedores para poder mostrar, listar, crear y eliminar 
 * los proveedores
 */
var rutaProveedor = (0, _express.Router)();
rutaProveedor.get("/:id", _controllers.mostrarProveedor);
rutaProveedor.get("/", _controllers.listarProveedor);
rutaProveedor.post("/", _controllers.crearProveedor);
rutaProveedor["delete"]("/:id", _controllers.eliminarProveedor);
var _default = exports["default"] = rutaProveedor;