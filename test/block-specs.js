"use strict" 
/*****************************************************
 * Internal tests
 *****************************************************/

let chai = require('chai')
let chaiAsPromised = require("chai-as-promised")
let should = chai.should
let expect = chai.expect
let Block = require("../entities/block.js")
let fs = require('fs')

before(function(done) {
  done()
})

after(function(done) {
  // here you can clear fixtures, etc.
  done()
})

describe("A. Block tests:", function() {
  it("A block should contain index, previousHash, timestamp, data, hash and nonce fields", function () {
    //Prepare
    let block = new Block()
    expect(block).to.have.property('index')
    expect(block).to.have.property('previousHash')
    expect(block).to.have.property('timestamp')
    expect(block).to.have.property('data')
    expect(block).to.have.property('hash')
    expect(block).to.have.property('nonce')
  });
  it("A block should have a function which allows to create a hash", function () {
    let block = new Block()
    expect(block).to.have.property('createHash')
    expect(block.createHash()).to.be.a('string')
  })
})

