'use strict';

const matchr = require('matchr');

// util

const castArray = (value) => Array.isArray(value) ? value : [value];

// private

const check = ({ include = [], exclude = [] } = {}) => {
  const includeArr = castArray(include);
  const excludeArr = castArray(exclude);
  return (value) => {
    const match = (eludeValue) => matchr(value, eludeValue);
    return (includeArr.length === 0 || includeArr.some(match)) && !excludeArr.some(match);
  };
};

// exports

const elude = (collection, options) => collection.filter(check(options));

elude.one = (value, options) => check(options)(value);

module.exports = elude;
