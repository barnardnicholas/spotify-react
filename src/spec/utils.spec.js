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
  it('returns an valid query string when passed a single valid argument', () => {
    const args = { someKey: 'someValue' };
    expect(makeQuery(args)).to.equal('?someKey=someValue');
  });
  it('returns an valid query string when passed multiple valid arguments', () => {
    const args = { someKey: 'someValue', anotherKey: 'anotherValue' };
    const args2 = {
      someKey: 'someValue',
      anotherKey: 'anotherValue',
      aDifferentKey: 'aDifferentValue',
    };
    expect(makeQuery(args)).to.equal('?someKey=someValue&anotherKey=anotherValue');
    expect(makeQuery(args2)).to.equal(
      '?someKey=someValue&anotherKey=anotherValue&aDifferentKey=aDifferentValue',
    );
  });
  it('returns an valid query string when passed multiple values in a single argument', () => {
    const args = { someKey: ['someValue', 'someOtherValue'] };
    expect(makeQuery(args)).to.equal('?someKey=someValue,someOtherValue');
  });
});
