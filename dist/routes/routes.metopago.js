"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.metopago");
/**
 * Rutas
 * @module Rutas
 */

var rutaMetoPago = (0, _express.Router)();

/**
 * Rutas para poder utilizar los metodos de pago
 */
rutaMetoPago.get("/:id", _controllers.MostrarPago);
rutaMetoPago.get("/", _controllers.ListarPago);
rutaMetoPago.post("/", _controllers.crearPago);
rutaMetoPago["delete"]("/:id", _controllers.eliminarPago);
var _default = exports["default"] = rutaMetoPago;