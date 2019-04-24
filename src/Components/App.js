import React from 'react'
import {connect} from 'react-redux'
import {
  mapState,
  mapDispatch
} from '../Actions/ActionCreators'

class App extends React.Component {
  componentDidMount(){
    const { test, multiply, add } = this.props
    setTimeout(() => {
      multiply(4, 20)
    }, 2000)
  }
  render(){
    const {message} = this.props
    return(
      <React.Fragment>
        <div>{message}</div>
      </React.Fragment>
    )
  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(mapState, mapDispatch)(App)

export default connectedComponent
