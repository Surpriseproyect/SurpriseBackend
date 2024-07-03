"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarPedido = exports.eliminarPedido = exports.crearPedido = exports.contadorPedidos = exports.actualizarPedido = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysql = require("../config/mysql.db");
/**
 * Se importo la base de datos
 * @module controladores
 */

/**
 * Se creo la constancia de listar el pedido 
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
var listarPedido = exports.listarPedido = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mysql.pool.query("CALL SP_LISTARPEDIDO();");
        case 3:
          respuesta = _context.sent;
          return _context.abrupt("return", respuesta[0]);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function listarPedido(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia de contar los pedidos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
var contadorPedidos = exports.contadorPedidos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _mysql.pool.query("CALL SP_CONTADOR_PEDIDO();");
        case 3:
          respuesta = _context2.sent;
          return _context2.abrupt("return", respuesta[0]);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function contadorPedidos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia para crear el pedido
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
var crearPedido = exports.crearPedido = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, _idusuario, _idproducto, _idmetodopago, _cantidad, _total, _estado, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, _idusuario = _req$body._idusuario, _idproducto = _req$body._idproducto, _idmetodopago = _req$body._idmetodopago, _cantidad = _req$body._cantidad, _total = _req$body._total, _estado = _req$body._estado;
          _context3.prev = 1;
          _context3.next = 4;
          return _mysql.pool.query("CALL SP_CREAR_PEDIDO(?, ?, ?, ?, ?, ?)", [_idusuario, _idproducto, _idmetodopago, _cantidad, _total, _estado]);
        case 4:
          respuesta = _context3.sent;
          return _context3.abrupt("return", respuesta[0]);
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function crearPedido(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia para actualizar los pedidos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
var actualizarPedido = exports.actualizarPedido = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, estado, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          estado = req.body.estado;
          _context4.prev = 2;
          _context4.next = 5;
          return _mysql.pool.query("CALL SP_ACTUALIZAR_PEDIDO(?, ?)", [id, estado]);
        case 5:
          respuesta = _context4.sent;
          return _context4.abrupt("return", respuesta[0]);
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json(_context4.t0);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return function actualizarPedido(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Se creo la constancia para eliminar el pedido
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
var eliminarPedido = exports.eliminarPedido = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _mysql.pool.query("CALL SP_ELIMINAR_PEDIDO(?)", [id]);
        case 4:
          respuesta = _context5.sent;
          res.json({
            "respuesta": "eliminado"
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json({
            "error": "el usuario no ha sido eliminado"
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarPedido(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();