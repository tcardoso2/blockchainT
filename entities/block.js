// NOTE:
// Initially based on https://blog.educationecosystem.com/how-to-create-your-own-cryptocurrency-blockchain-in-node-js-3/


var crypto = require('crypto')
var sha256 = crypto.createHash('sha256')

module.exports = class Block {

  constructor() {
    this.index = 0
    this.previousHash = null
    this.timestamp = null
    this.data = null
    this.hash = null
    this.nonce = null
  }

  createHash() {
    return sha256.update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).digest('base64')
  }
}
