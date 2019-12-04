/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const expect = require('chai').expect
const calc = require('../src/main')

describe('Calc', () => {
  // smoke tests
  describe('smoke tests', () => {
    it('should exist the "calc" lib', () => {
      expect(calc).to.exist
    })

    it('should exist the method "sum"', () => {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a('function')
    })

    it('should exist the method "sub"', () => {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a('function')
    })

    it('should exist the method "div"', () => {
      expect(calc.div).to.exist
      expect(calc.div).to.be.a('function')
    })

    it('should exist the method "mul"', () => {
      expect(calc.mul).to.exist
      expect(calc.mul).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 if sum(2,2)', () => {
      expect(calc.sum(2, 2)).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('should return 4 if sub(6,2)', () => {
      expect(calc.sub(6, 2)).to.be.equal(4)
    })

    it('should return -4 if sub(6,10)', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4)
    })
  })

  describe('Div', () => {
    it('should return 4 if div(8,2)', () => {
      expect(calc.div(8, 2)).to.be.equal(4)
    })

    it('should return "Não é possível dividir por zero!" when divide by 0', () => {
      expect(calc.div(4, 0)).to.be.equal('Não é possível dividir por zero!')
    })
  })

  describe('Mul', () => {
    it('should return 8 if mul(4,2)', () => {
      expect(calc.mul(4, 2)).to.be.equal(8)
    })
  })
})
