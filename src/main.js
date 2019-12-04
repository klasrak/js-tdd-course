module.exports = {
  sum: function (n1, n2) {
    return n1 + n2
  },
  sub: function (n1, n2) {
    return n1 - n2
  },
  div: function (n1, n2) {
    return (n2 === 0) ? 'Não é possível dividir por zero!' : n1 / n2
  },
  mul: function (n1, n2) {
    return n1 * n2
  }
}
