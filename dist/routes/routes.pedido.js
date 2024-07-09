"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.pedido");
/**
 * Rutas
 * @module rutas
 */

var routesPedidos = (0, _express.Router)();

/**
 * Se utilizo las ruta de pedidos para poder utilizar el controlador de pedido
 */
routesPedidos.get("/", _controllers.listarPedido);
routesPedidos.put("/:id", _controllers.actualizarPedido);
routesPedidos["delete"]("/:id", _controllers.eliminarPedido);
routesPedidos.post("/crear", _controllers.crearPedido);
var _default = exports["default"] = routesPedidos;