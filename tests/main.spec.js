/* eslint-disable no-undef */
const expect = require('chai').expect

describe('Main', function () {
  var arr
  // Hooks
  // Before roda apenas uma vez antes do bloco
  before(function () {
    // Exemplo de uso: Inicia uma conexão com o banco de dados
  })

  // Roda uma vez depois do block
  after(function () {
    // Exemplo de uso: Fecha a conexão com o banco de dados
  })

  // Roda todas as vezes, antes de CADA bloco.
  beforeEach(function () {
    arr = [1, 2, 3]
  })

  // Roda todas a vezes, depois de CADA bloco
  afterEach(function () {

  })

  // Também funciona com arrow functions
  // Smoke test => Teste mais básico, para verificar se algo existe ou se é de algum tipo esperado. Geralmente expect.to.be.a
  it('should be an array', () => {
    expect(arr).to.be.an('array')
  })

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4)
    expect(arr).to.have.lengthOf(4)
  })

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop()
    expect(arr).to.have.lengthOf(2)
  })

  it('should remove the value 3 when use pop in the array', function () {
    arr.pop()
    expect(arr).to.not.include(3)
  })
})
