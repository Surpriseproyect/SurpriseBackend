"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productos = exports.inicio = exports.dashboard = exports.cajero = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = require("dotenv");
var _controllers = require("./controllers.usuario");
var _controllers2 = require("./controllers.producto");
var _controllers3 = require("./controllers.factura");
var _controllers4 = require("./controllers.pedido");
var _controllers5 = require("./controllers.metopago");
var _controllers6 = require("./controllers.proveedor");
/**
 * Importaciones para los controladores del login
 * @module controladores
 */

(0, _dotenv.config)();

/**
 * Inicio donde se encuentra el login
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var inicio = exports.inicio = function inicio(req, res) {
  var url = process.env.BACKEND_URL;
  var opciones = {
    url: url
  };
  res.json(opciones);
};

/**
 * Es la informacion de nuestra Web
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */

/**
 * Los productos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var productos = exports.productos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var producto;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _controllers2.listarProducto)(req, res);
        case 3:
          producto = _context.sent;
          res.json({
            producto: producto[0]
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            "error": _context.t0
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function productos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Metodo listar para el gerente
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var dashboard = exports.dashboard = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta, producto, factura, fiado, pedido, metopago, proveedor, ventas, total, pedidos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _controllers.listarUsuario)(req, res);
        case 3:
          respuesta = _context2.sent;
          _context2.next = 6;
          return (0, _controllers2.listarProducto)(req, res);
        case 6:
          producto = _context2.sent;
          _context2.next = 9;
          return (0, _controllers3.listarFactura)(req, res);
        case 9:
          factura = _context2.sent;
          _context2.next = 12;
          return (0, _controllers.fiados)(req, res);
        case 12:
          fiado = _context2.sent;
          _context2.next = 15;
          return (0, _controllers4.listarPedido)(req, res);
        case 15:
          pedido = _context2.sent;
          _context2.next = 18;
          return (0, _controllers5.ListarPago)(req, res);
        case 18:
          metopago = _context2.sent;
          _context2.next = 21;
          return (0, _controllers6.listarProveedor)(req, res);
        case 21:
          proveedor = _context2.sent;
          _context2.next = 24;
          return (0, _controllers3.contadorVentas)(req, res);
        case 24:
          ventas = _context2.sent;
          _context2.next = 27;
          return (0, _controllers3.totalVentas)(req, res);
        case 27:
          total = _context2.sent;
          _context2.next = 30;
          return (0, _controllers4.contadorPedidos)(req, res);
        case 30:
          pedidos = _context2.sent;
          res.json({
            usuarios: respuesta[0],
            producto: producto[0],
            fiado: fiado,
            factura: factura[0],
            pedido: pedido[0],
            metopago: metopago,
            proveedor: proveedor,
            ventas: ventas[0],
            total: total[0],
            pedidos: pedidos[0]
          });
          _context2.next = 37;
          break;
        case 34:
          _context2.prev = 34;
          _context2.t0 = _context2["catch"](0);
          res.json({
            "error": _context2.t0
          });
        case 37:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 34]]);
  }));
  return function dashboard(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Metodo listar para el cajero
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var cajero = exports.cajero = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta, producto, factura, fiado, pedido, metopago, proveedor;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _controllers.listarUsuario)(req, res);
        case 3:
          respuesta = _context3.sent;
          _context3.next = 6;
          return (0, _controllers2.listarProducto)(req, res);
        case 6:
          producto = _context3.sent;
          _context3.next = 9;
          return (0, _controllers3.listarFactura)(req, res);
        case 9:
          factura = _context3.sent;
          _context3.next = 12;
          return (0, _controllers.fiados)(req, res);
        case 12:
          fiado = _context3.sent;
          _context3.next = 15;
          return (0, _controllers4.listarPedido)(req, res);
        case 15:
          pedido = _context3.sent;
          _context3.next = 18;
          return (0, _controllers5.ListarPago)(req, res);
        case 18:
          metopago = _context3.sent;
          _context3.next = 21;
          return (0, _controllers6.listarProveedor)(req, res);
        case 21:
          proveedor = _context3.sent;
          res.json({
            usuarios: respuesta[0],
            producto: producto[0],
            fiado: fiado,
            factura: factura[0],
            pedido: pedido[0],
            metopago: metopago,
            proveedor: proveedor
          });
          _context3.next = 28;
          break;
        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3["catch"](0);
          res.json({
            "error": _context3.t0
          });
        case 28:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 25]]);
  }));
  return function cajero(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();