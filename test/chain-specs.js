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
  it("A chain should have a function to allow building it's genesis first block, and a chain property of type array", function () {
    let chain = new Chain()
    expect(chain).to.have.property('buildGenesisBlock')
    expect(chain).to.have.property('chain')
    expect(chain.chain).to.be.an.instanceof(Array)
  })
  it("The buildGenesisBlock creates the first block of the chain and is of type Block", function () {
    let chain = new Chain()
    chain.buildGenesisBlock()
    expect(chain).to.have.property('lastBlock')
    expect(chain.lastBlock()).to.be.an.instanceof(Block)
  })
})

