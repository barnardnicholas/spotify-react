const { expect } = require('chai');
const { makeQuery } = require('../utils/utils');

describe('makeQuery', () => {
  it('returns a string', () => {
    const args = {};
    const args2 = null;
    const args3 = [];
    let args4;
    const args5 = { someKey: 'someValue' };
    expect(makeQuery(args)).to.be.a('string');
    expect(makeQuery(args2)).to.be.a('string');
    expect(makeQuery(args3)).to.be.a('string');
    expect(makeQuery(args4)).to.be.a('string');
    expect(makeQuery(args5)).to.be.a('string');
  });
  it('returns an empty string when passed invalid arguments', () => {
    const args = {};
    const args2 = null;
    const args3 = [];
    let args4;
    expect(makeQuery(args)).to.equal('');
    expect(makeQuery(args2)).to.equal('');
    expect(makeQuery(args3)).to.equal('');
    expect(makeQuery(args4)).to.equal('');
  });
});
