import React, { Component } from 'react'
import Form from './Form'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>Mr Whippy</h1>
        <h2>Current stock levels:</h2>
        <Form />
      </div>
    )
  }
}

export default App
