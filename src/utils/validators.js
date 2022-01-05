export function validateEmptyAndLength3 (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 8) {
    return '*Este campo precisa de no mínimo 8 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  // test() - Executa uma busca por uma correspondência entre  uma expressão regular e uma string.
  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Este campo precisa ser um e-mail'
  }

  return true
}
