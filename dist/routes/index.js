"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("./routes.producto"));
var _routes2 = _interopRequireDefault(require("./routes.usuario"));
var _routes3 = _interopRequireDefault(require("./routes.proveedor"));
var _routes4 = _interopRequireDefault(require("./routes.facturas"));
var _routes5 = _interopRequireDefault(require("./routes.metopago"));
var _routes6 = _interopRequireDefault(require("./routes.login"));
var _routes7 = _interopRequireDefault(require("./routes.pedido"));
/**
 * Rutas
 * @module Rutas
 */

/**
 * Se creo la constancia ruta para el Router
 */
var ruta = (0, _express.Router)();

/**
 * Se utilizo la ruta que se creo para poder llamar a todas las rutas
 */
ruta.use("/producto", _routes["default"]);
ruta.use("/usuario", _routes2["default"]);
ruta.use("/proveedor", _routes3["default"]);
ruta.use("/factura", _routes4["default"]);
ruta.use("/metopago", _routes5["default"]);
ruta.use("/pedido", _routes7["default"]);

/**
 * Se utilizo la ruta para el login
 */
ruta.use("/", _routes6["default"]);
var _default = exports["default"] = ruta;