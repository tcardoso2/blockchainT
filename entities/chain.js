let Block = require('./block')

module.exports = class Blockchain {

  constructor() {
    this.chain = [this.buildGenesisBlock()]
  }

  buildGenesisBlock() {
    return new Block(0, "15/05/2022", "This is the genesis block", "0")
  }

  lastBlock() {
    return this.chain[this.chain.length - 1]
  }
}
