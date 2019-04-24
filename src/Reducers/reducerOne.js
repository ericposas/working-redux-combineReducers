import Types from '../Actions/Types'

const reducerOne = (slice = 0, action) => {
  switch (action.type){
    case Types.MULT: {
      return slice + someCalculationHere(action.payload.a, action.payload.b)
    }
    default: {
      return slice
    }
  }
}

function someCalculationHere(a, b){
  return (a * b)
}

export default reducerOne
