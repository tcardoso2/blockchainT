"use strict" 
/*****************************************************
 * Internal tests
 *****************************************************/

let chai = require('chai')
let chaiAsPromised = require("chai-as-promised")
let should = chai.should
let expect = chai.expect
let Chain = require("../entities/chain.js")
let Block = require("../entities/block.js")
let fs = require('fs')

before(function(done) {
  done()
})

after(function(done) {
  // here you can clear fixtures, etc.
  done()
})

describe("B. Blockchain tests:", function() {
  it("A chain should have a function to allow building it's genesis first block, a complexity prop and a chain property of type array", function () {
    let chain = new Chain()
    expect(chain).to.have.property('buildGenesisBlock')
    expect(chain).to.have.property('chain')
    expect(chain).to.have.property('complexity')
    expect(chain.complexity).to.equal(3)	// Temporary? This forces test to fail when I change this value, which is desired for now
    expect(chain.chain).to.be.an.instanceof(Array)
  })
  it("The buildGenesisBlock creates the first block of the chain and is of type Block", function () {
    let chain = new Chain()    // buildGenesisBlock gets called upon instanciating the object
    expect(chain).to.have.property('lastBlock')
    expect(chain.lastBlock()).to.be.an.instanceof(Block)
    expect(chain.lastBlock().data).to.equal("This is the genesis block")
  })
  it("It should be possible to add a new block on the chain", function () {
    let chain = new Chain()
    let block = new Block(1, "15/05/2022", "This is the second block", "0")
    chain.buildGenesisBlock()
    chain.addBlock(block)
    expect(chain.chain.length).to.equal(2)
    expect(chain.lastBlock().data).to.equal("This is the second block")
  })
  xit("It should not allow calling buildGenesisBlock after it has been called?")
})

