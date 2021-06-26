"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class TweetsController {
  async create(req, res) {
    // const { body } = req
    return res.json({
      okay: true
    });
  }

}

exports.default = TweetsController;