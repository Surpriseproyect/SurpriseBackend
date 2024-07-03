"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index"));
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireWildcard(require("path"));
var _nodeUrl = require("node:url");
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerOutput = _interopRequireDefault(require("./tools/swagger-output.json"));
var _nodeOs = _interopRequireDefault(require("node:os"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * Server Principal
 * @module Server
 */

(0, _dotenv.config)();

/**
 * Se utilizo las constancias para poder conectar el frontend de las vistas con el backend
 */
// const __filename = fileURLToPath(new URL(import.meta.url));
var _filename = process.cwd();
var _dirname = (0, _path.dirname)(_filename);
var server = (0, _express["default"])();
server.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swaggerOutput["default"]));
server.use("/docu", _express["default"]["static"](_path["default"].join(_dirname, "/doc")));
server.use(_express["default"].json());
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use((0, _cors["default"])());
server.use((0, _morgan["default"])("dev"));
server.set("view engine", "ejs");
server.set("port", process.env.PORT || 3000);

/**
 * Esta es la ruta principal del login
 */
//Rutas
server.use("/", _index["default"]);

/**
 * Esta es la ruta server para conectar el puerto con las vistas del frontend
 */
var _default = exports["default"] = server;