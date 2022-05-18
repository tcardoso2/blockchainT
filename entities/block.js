// NOTE:
// Initially based on https://blog.educationecosystem.com/how-to-create-your-own-cryptocurrency-blockchain-in-node-js-3/


var hash = require('crypto').createHash

module.exports = class Block {

  constructor(index, timestamp, data, previousHash = "") {
    this.index = index
    this.previousHash = previousHash
    this.timestamp = timestamp
    this.data = data
    this.hash = this.createHash()
    this.nonce = 0
  }

  createHash() {
    return hash('sha256').update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).digest('base64')
  }

  mineBlock(complexity) {
    // TBD: Do tests on the mining itself
    while (this.hash.substring(0, complexity) !== Array(complexity + 1).join("0")) {
      this.nonce++;
      this.hash = this.createHash();
    }
    console.log(`\n      [Block] :: Mining... + ${this.hash}\n`);
  }
}
