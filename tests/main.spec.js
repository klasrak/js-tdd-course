/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai'
import { sum, sub, div, mul } from '../src/main'

describe('Calc', () => {
  // smoke tests
  describe('smoke tests', () => {
    it('should exist the method "sum"', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('should exist the method "sub"', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('should exist the method "div"', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })

    it('should exist the method "mul"', () => {
      expect(mul).to.exist
      expect(mul).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 if sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('should return 4 if sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4)
    })

    it('should return -4 if sub(6,10)', () => {
      expect(sub(6, 10)).to.be.equal(-4)
    })
  })

  describe('Div', () => {
    it('should return 4 if div(8,2)', () => {
      expect(div(8, 2)).to.be.equal(4)
    })

    it('should return "Não é possível dividir por zero!" when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível dividir por zero!')
    })
  })

  describe('Mul', () => {
    it('should return 8 if mul(4,2)', () => {
      expect(mul(4, 2)).to.be.equal(8)
    })
  })
})
