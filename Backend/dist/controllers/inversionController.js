"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Inversion = _interopRequireDefault(require("../models/Inversion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// agrega un nueva inversion
var nuevaInversion = function nuevaInversion(req, res, next) {
  var inversion;
  return regeneratorRuntime.async(function nuevaInversion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          inversion = new _Inversion["default"](req.body);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(inversion.save());

        case 4:
          res.json(inversion);
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          // si hay un error, console.log y next
          res.send(_context.t0);
          next();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
}; // Muestra todas las inversiones


var mostrarInversiones = function mostrarInversiones(req, res, next) {
  var indice, cantidad, inversion, totalInversion;
  return regeneratorRuntime.async(function mostrarInversiones$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          indice = parseInt(req.query.index);
          cantidad = parseInt(req.query.quantity);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(_Inversion["default"].find({}).limit(cantidad).skip(indice));

        case 5:
          inversion = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(_Inversion["default"].countDocuments());

        case 8:
          totalInversion = _context2.sent;
          res.json({
            result: inversion,
            totalPages: totalInversion
          });
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          next();

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 12]]);
}; // Muestra una inversion por su ID


var mostrarInversion = function mostrarInversion(req, res, next) {
  var inversion;
  return regeneratorRuntime.async(function mostrarInversion$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_Inversion["default"].findById(req.params.id));

        case 2:
          inversion = _context3.sent;

          if (!inversion) {
            res.json({
              mensaje: 'Esa inversion no existe'
            });
            next();
          } // Mostrar la inversion


          res.json(inversion);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Actualiza una inversion por su ID


var actualizarInversion = function actualizarInversion(req, res, next) {
  var inversion;
  return regeneratorRuntime.async(function actualizarInversion$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Inversion["default"].findOneAndUpdate({
            _id: req.params.id
          }, req.body, {
            "new": true
          }));

        case 3:
          inversion = _context4.sent;
          res.json(inversion);
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.send(_context4.t0);
          next();

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Elimina una inversion por su ID 


var eliminarInversion = function eliminarInversion(req, res, next) {
  return regeneratorRuntime.async(function eliminarInversion$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_Inversion["default"].findOneAndDelete({
            _id: req.params.id
          }));

        case 3:
          res.json({
            mensaje: 'La inversion se ha eliminada'
          });
          _context5.next = 10;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          next();

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var _default = {
  nuevaInversion: nuevaInversion,
  mostrarInversiones: mostrarInversiones,
  mostrarInversion: mostrarInversion,
  actualizarInversion: actualizarInversion,
  eliminarInversion: eliminarInversion
};
exports["default"] = _default;