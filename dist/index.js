"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _mensaje = require("./message/mensaje");
var _server = _interopRequireDefault(require("./server"));
/**
 * @module IndexPrincipal
 */

/**
 * Este es el index principal donde se ejecuta el puerto
 */

_server["default"].listen(_server["default"].get("port"), function () {
  (0, _mensaje.mensajeconsola)("AccesoPuerto", "".concat(_mensaje.mensa.puerto, " ").concat(_server["default"].get("port"), " ").concat(_server["default"].get("port")));
});