"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateJsonBody;

function validateJsonBody(_, res, buf) {
  try {
    JSON.parse(buf);
  } catch {
    res.status(400).json({
      message: 'Formato de JSON inválido.'
    });
    throw Error('Inválid JSON.');
  }
}