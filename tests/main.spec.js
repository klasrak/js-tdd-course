/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

/*

Desafio FizzBuzz

Escreva uma lib que receba um número e:

Se o número for divisível por 3, no lugar do número escreva 'Fizz'; OK
Se o número for divisível por 5, no lugar do número escreva 'Buzz; OK
Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'; OK
Se não for multiplo de nada, retorna o número.

*/

import { expect } from 'chai'
import FizzBuzz from '../src/main'

describe('FizzBuzz', () => {
  it('should return "Fizz" when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz')
    expect(FizzBuzz(6)).to.be.equal('Fizz')
    expect(FizzBuzz(9)).to.be.equal('Fizz')
  })

  it('should return "Buzz" when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz')
    expect(FizzBuzz(10)).to.be.equal('Buzz')
  })

  it('should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
  })

  it('should return the number when not multiple of 3 and/or 5', () => {
    expect(FizzBuzz(1)).to.be.equal(1)
    expect(FizzBuzz(2)).to.be.equal(2)
    expect(FizzBuzz(4)).to.be.equal(4)
    expect(FizzBuzz(7)).to.be.equal(7)
    expect(FizzBuzz(8)).to.be.equal(8)
    expect(FizzBuzz(11)).to.be.equal(11)
    expect(FizzBuzz(14)).to.be.equal(14)
  })
})
