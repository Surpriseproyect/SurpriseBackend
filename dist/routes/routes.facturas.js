"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.factura");
/**
 * Rutas
 * @module rutas
 */

var rutaFactura = (0, _express.Router)();
/**
 * Se utiliza la rutaFactura para poder llamar las constancias hechas mediante
 * los controladores de facturas
 */
rutaFactura.get("/:id", _controllers.mostrarFactura);
rutaFactura.get("/", _controllers.listarFactura);
rutaFactura.post("/", _controllers.crearFactura);
rutaFactura.put("/:id", _controllers.actualizarEstado);
var _default = exports["default"] = rutaFactura;