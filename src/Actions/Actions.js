import Types from './Types'

export const test = { type: Types.TEST, message:'React is NOW running' }

export const multiply = (a, b) => ({
  type: Types.MULT, payload: { a:a, b:b }
})

export const add = (a, b) => ({
  type: Types.ADD, payload: { a:a, b:b }
})
