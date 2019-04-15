import React, { Component } from 'react'

class AddForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cotent: ''
      }
    }
    handleChange = (e) => {
        this.setState({
            cotent: e.target.value
        })
    }
handleSubmit = (e) => {
    e.preventDefalt()
    console.log(this.state)
}    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Add new todo</label>
            <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default AddForm
