"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalVentas = exports.mostrarFactura = exports.listarFactura = exports.crearFactura = exports.contadorVentas = exports.actualizarEstado = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysql = require("../config/mysql.db");
/**
 * Importacion de la base de datos
 * @module controladores
 */

/**
 * Se creo la contancia mostrar factura para poder mostrar todas las facturas ingresadas por el gerente y cajero
 * @param {Object} req Peticion
 * @param {Object} res Respuesta
 */
var mostrarFactura = exports.mostrarFactura = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return _mysql.pool.query("CALL SP_MOSTRAR_FACTURA (\"".concat(id, "\")"));
        case 4:
          respuesta = _context.sent;
          res.json({
            "respuesta": respuesta[0][0]
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.json({
            "error": _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function mostrarFactura(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia de listar la factura para poder mostrar las facturas sin necesidad de pedir el id
 * @param {*} req Peticion
 * @param {*} res Respuesta
 * @returns 
 */
var listarFactura = exports.listarFactura = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysql.pool.query("CALL SP_LISTAR_FACTURA()");
        case 3:
          respuesta = _context2.sent;
          return _context2.abrupt("return", respuesta[0]);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.json({
            "error": _context2.t0
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function listarFactura(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia de crear factura
 * mediante los pedidos para poder dar los permisos al gerente y cajero de hacerlo
 * @param {*} req Peticion
 * @param {*} res Respuesta
 */
var crearFactura = exports.crearFactura = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, idusuario, fecha, idmetodopago, estado, ncuenta, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, idusuario = _req$body.idusuario, fecha = _req$body.fecha, idmetodopago = _req$body.idmetodopago, estado = _req$body.estado, ncuenta = _req$body.ncuenta;
          _context3.prev = 1;
          _context3.next = 4;
          return _mysql.pool.query("CALL SP_CREAR_FACTURA (?,?,?,?,?)", [idusuario, fecha, idmetodopago, estado, ncuenta]);
        case 4:
          respuesta = _context3.sent;
          res.json({
            "respuesta": "la factura ha sido creada"
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          // res.json({"error": "La factura no ha sido creada"})
          console.log(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function crearFactura(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia actualizar estado para ver el estado del cliente
 * @param {*} req Peticion
 * @param {*} res Respuesta
 */
var actualizarEstado = exports.actualizarEstado = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _mysql.pool.query("CALL SP_ESTADO_FACTURA(?)", [id]);
        case 4:
          respuesta = _context4.sent;
          res.json({
            "respuesta": "Estado actualizado"
          });
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function actualizarEstado(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia contador de las ventas para poder llevar un orden
 * @param {*} req Peticion
 * @param {*} res Respuesta
 * @returns 
 */
var contadorVentas = exports.contadorVentas = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _mysql.pool.query("CALL SP_CONTADOR_VENTAS()");
        case 3:
          respuesta = _context5.sent;
          return _context5.abrupt("return", respuesta[0]);
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function contadorVentas(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia del total de las ventas
 * @param {*} req Peticion
 * @param {*} res Respuesta
 * @returns 
 */
var totalVentas = exports.totalVentas = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _mysql.pool.query("CALL SP_TOTAL_VENTAS()");
        case 3:
          respuesta = _context6.sent;
          return _context6.abrupt("return", respuesta[0]);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function totalVentas(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();