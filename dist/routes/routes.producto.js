"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.producto");
/**
 * Rutas
 * @module Rutas
 */

/**
 * Se utilizo las rutas productos para poder mostrar, listar, crear, modificar y eliminar los
 * productos
 */
var rutaProducto = (0, _express.Router)();
rutaProducto.get("/:id", _controllers.mostrarProducto);
rutaProducto.get("/", _controllers.listarProducto);
rutaProducto.post("/", _controllers.crearProducto);
rutaProducto.put("/:id", _controllers.modificarProducto);
rutaProducto["delete"]("/:id", _controllers.eliminarProducto);
var _default = exports["default"] = rutaProducto;