import React, { Component } from 'react'

class Addninja extends Component {
    state = {
        name: null,
        age:null,
        belt:null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
      this.props.addninja(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.handleSubmit}>
                    <label htmlFor="name">Nmae:</label>
                    <input type="text" id="name" onChange={ this.handleChange} />
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={ this.handleChange} />
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={ this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Addninja