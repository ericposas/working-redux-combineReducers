import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './Reducers/RootReducer'
import App from './Components/App'
import './index.scss'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

// Redux Store
const store = createStore(RootReducer)
store.subscribe(() => {
  console.log(store.getState())
})
console.log(store.getState())

// Render
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
)
