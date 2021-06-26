"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TweetsController = _interopRequireDefault(require("../controllers/TweetsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tweetsRouter = (0, _express.Router)();
const tweetsController = new _TweetsController.default();
tweetsRouter.post('/', tweetsController.create);
var _default = tweetsRouter;
exports.default = _default;