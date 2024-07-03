"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.login");
/**
 * rutas
 * @module rutas
 */

var rutaLogin = (0, _express.Router)();

/**
 * Se utiliza la rutaLogin donde se va a mostrar el inicio del login
 */
rutaLogin.get("/", _controllers.inicio);
// rutaLogin.get("/sobrenosotros", sobrenosotros)
rutaLogin.get("/productos", _controllers.productos);
rutaLogin.get("/dashboard", _controllers.dashboard);
rutaLogin.get("/cajero", _controllers.cajero);
var _default = exports["default"] = rutaLogin;