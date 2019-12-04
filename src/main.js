const sum = (n1, n2) => n1 + n2
const sub = (n1, n2) => n1 - n2
const div = (n1, n2) => (n2 === 0) ? 'Não é possível dividir por zero!' : n1 / n2
const mul = (n1, n2) => n1 * n2

export { sum, sub, mul, div }
