<p align="center">
  <h3 align="center">elude</h3>
  <p align="center">Elude values from a collection with a powerfull include / exclude config.<p>
  <p align="center">
    <a href="https://www.npmjs.com/package/elude">
      <img src="https://img.shields.io/npm/v/elude.svg" alt="npm version">
    </a>
    <a href="https://travis-ci.org/Moeriki/node-elude">
      <img src="https://travis-ci.org/Moeriki/node-elude.svg?branch=master" alt="Build Status"></img>
    </a>
    <a href="https://coveralls.io/github/Moeriki/node-elude?branch=master">
      <img src="https://coveralls.io/repos/github/Moeriki/node-elude/badge.svg?branch=master" alt="Coverage Status"></img>
    </a>
    <a href="https://david-dm.org/moeriki/node-elude">
      <img src="https://david-dm.org/moeriki/node-elude/status.svg" alt="dependencies Status"></img>
    </a>
  </p>
</p>

---

## Install

```sh
npm install --save elude
```

```js
const elude = require('elude');
```

## Usage

```js
const beatles = [
  { name: 'John', alive: false, age: 40 },
  { name: 'Paul', alive: true, age: 74 },
  { name: 'George', alive: false, age: 57 },
  { name: 'Ringo', alive: true, age: 76 },
];

const alive = elude(beatles, { include: 'alive' }); // Paul, Ringo

const favorites = elude(beatles, { exclude: { name: /^[GR]/ } }); // John, Paul

const shouldRetire = elude(beatles, {
  include: (member) => member.age > 60,
  exclude: { name: 'Paul' },
}); // Ringo
```

## Matchr

Elude uses [matchr](https://github.com/Moeriki/node-matchr) for its powerfull value matching. Be sure to check all its options.

### API

> elude( collection [, options]) `:Array<*>`

* collection: `Array<*>`
* options.include: `* | Array<*>`
* options.exclude: `* | Array<*>`

> elude.one( value [, options]) `:boolean`

* options.include: `* | Array<*>`
* options.exclude: `* | Array<*>`
