"use strict" 
/*****************************************************
 * Internal tests
 *****************************************************/

let chai = require('chai')
let chaiAsPromised = require("chai-as-promised")
let should = chai.should
let expect = chai.expect
let Chain = require("../entities/chain.js")
let fs = require('fs')

before(function(done) {
  done();
});

after(function(done) {
  // here you can clear fixtures, etc.
  done();
});

describe("B. Blockchain tests:", function() {
  it("A chain should bla bla...", function () {
    //Prepare
    let chain = new Chain()
    expect(chain).to.have.property('index')
    expect(chain).to.have.property('previousHash')
    expect(chain).to.have.property('timestamp')
    expect(chain).to.have.property('data')
    expect(chain).to.have.property('hash')
    expect(chain).to.have.property('nonce')
    should().fail()
  });
  xit("2nd test", function () {
  });
});

