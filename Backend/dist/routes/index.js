"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _inversionController = _interopRequireDefault(require("../controllers/inversionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

// Envia monto aleatorio
router.get('/inversiones/calculoMonto', function (req, res) {
  // max y min expresado en miles
  var max = 100;
  var min = 5;
  var resultado = (Math.floor(Math.random() * (max - min)) + min) * 1000;
  res.send("".concat(resultado));
}); // Agrega nueva inversion via POST

router.post('/inversiones/crearInversion', _inversionController["default"].nuevaInversion); // Obtener todas las inversion

router.get('/inversiones', _inversionController["default"].mostrarInversiones); // Muestra una inversion en especifico (ID)

router.get('/inversiones/:id', _inversionController["default"].mostrarInversion); // Actualizar Inversion

router.put('/inversiones/:id', _inversionController["default"].actualizarInversion); // Eliminar Inversion

router["delete"]('/inversiones/:id', _inversionController["default"].eliminarInversion);
var _default = router;
exports["default"] = _default;