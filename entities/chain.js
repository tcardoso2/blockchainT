let Block = require('./block')

module.exports = class Blockchain {

  constructor() {
    this.chain = [this.buildGenesisBlock()]
    this.complexity = 3 //temporary?
  }

  buildGenesisBlock() {
    return new Block(0, "15/05/2022", "This is the genesis block", "0")
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.lastBlock().hash;
    newBlock.mineBlock(this.complexity);
    this.chain.push(newBlock);
  }

  lastBlock() {
    return this.chain[this.chain.length - 1]
  }
}
