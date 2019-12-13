"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var inversionSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  amount: {
    type: Number,
    trim: true
  },
  created: {
    type: Date,
    "default": Date.now
  }
});

var _default = _mongoose["default"].model('Inversion', inversionSchema);

exports["default"] = _default;