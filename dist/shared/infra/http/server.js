"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _validateJsonBody = _interopRequireDefault(require("./middlewares/validateJsonBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)();
const PORT = process.env.PORT || 7777;
server.use(_express.default.json({
  verify: _validateJsonBody.default
}));
server.use(_routes.default);
server.listen(PORT, () => {
  console.log(`🚀 O servidor esta online! PORTA: ${PORT}`);
});