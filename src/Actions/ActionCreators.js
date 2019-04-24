import { test, multiply, add } from './Actions'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps
export const mapDispatch = dispatch => ({
  test: ()=>{ dispatch(test) },
  multiply: (a,b) => { dispatch(multiply(a,b)) },
  add: (a,b) => { dispatch(add(a,b)) }
})
