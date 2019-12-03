/* eslint-disable no-undef */
describe('Main', function () {
  // Hooks
  // Before roda apenas uma vez antes do bloco
  before(function () {
    console.log('before')
  })

  // Roda uma vez depois do block
  after(function () {
    console.log('after')
  })

  // Roda todas as vezes, antes de CADA bloco.
  beforeEach(function () {
    console.log('before each')
  })

  // Roda todas a vezes, depois de CADA bloco
  afterEach(function () {
    console.log('after each')
  })

  it('test 1', function () {
    console.log('test 1')
  })

  it('test 2', function () {
    console.log('test 2')
  })
})
