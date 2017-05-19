'use strict';

const elude = require('../index');

const JOHN = { name: 'John', active: false };
const PAUL = { name: 'Paul', active: true };
const GEORGE = { name: 'George', active: false };
const RINGO = { name: 'Ringo', active: false };

const FIXTURE = [JOHN, PAUL, GEORGE, RINGO];

describe('elude', () => {

  let include, exclude, test;

  beforeEach(() => {
    include = [];
    exclude = [];
    test = () => elude(FIXTURE, { include, exclude });
  });

  it('should include all by default', () => {
    expect(elude(FIXTURE)).toEqual([JOHN, PAUL, GEORGE, RINGO]);
  });

  describe('elude()', () => {

    it('should include all by default', () => {
      expect(test()).toEqual([JOHN, PAUL, GEORGE, RINGO]);
    });

    it('should exclude one', () => {
      exclude = (member) => member.active;
      expect(test()).toEqual([JOHN, GEORGE, RINGO]);
    });

    it('should exclude multiple', () => {
      exclude = ['active', { name: /^[GR]/ }];
      expect(test()).toEqual([JOHN]);
    });

    it('should include one', () => {
      include = { name: /^[JP]/ };
      expect(test()).toEqual([JOHN, PAUL]);
    });

    it('should include multiple', () => {
      include = [{ name: 'John' }, 'active'];
      expect(test()).toEqual([JOHN, PAUL]);
    });

    it('should exclude even if included', () => {
      include = [{ name: /^[JP]/ }];
      exclude = ['active'];
      expect(test()).toEqual([JOHN]);
    });

  });

  describe('one()', () => {

    it('should elude one', () => {
      expect(elude.one(PAUL, 'active')).toBe(true);
    });

  });

});
