/* eslint-disable no-undef */
describe('Main', function () {
  describe('Method A', function () {
    context('Case 1', function () {
      it.skip('should happen blablabla', function () {
        // resultado esperado | De fato o nosso teste.
        // Entra de dados / Método sum(2,2)
        // Espera retornar (4)=> true ! (3)=> false=> broken test
        throw new Error('Just an error!')
      })
    })

    context('Case 2', function () {
      it('should happen blablabla', function () {
        // resultado esperado | De fato o nosso teste.
        // Entra de dados / Método sum(2,2)
        // Espera retornar (4)=> true ! (3)=> false=> broken test
        throw new Error('Another error')
      })
      it('should happen mimimi', function () {
        // resultado esperado | De fato o nosso teste.
        // Entra de dados / Método sum(2,2)
        // Espera retornar (4)=> true ! (3)=> false=> broken test
      })
    })
  })

  describe('Method B', function () {

  })
})
