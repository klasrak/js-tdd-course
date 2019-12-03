/* eslint-disable no-undef */
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

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4)
    console.log(arr.length) // 4
  })

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop()
    console.log(arr.length) // 2
  })

  it('should remove the value 3 when use pop in the array', function () {
    console.log(arr.pop() === 3) // true
  })
})
