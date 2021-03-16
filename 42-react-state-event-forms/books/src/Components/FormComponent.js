import React, { Component } from 'react'

export default class FormComponent extends Component {

    state = {

    }

    handleChange = (e) => {
        console.log(this.state)
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddBook(this.state)
        e.target.reset()
    }


    render() {
        return (
            <div>
                <h3>New Book Entry:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='isbn'>ISBN</label>
                    <input onChange={this.handleChange} name='isbn' id='isbn' type='text'/>

                    <label htmlFor='title'>title</label>
                    <input onChange={this.handleChange} name='title' id='title' type='text'/>

                    <label htmlFor='author'>author</label>
                    <input onChange={this.handleChange} name='author' id='author' type='text'/>

                    <label htmlFor='image'>image</label>
                    <input onChange={this.handleChange} name='image' id='image' type='text'/>

                    <input name="Submit" type="submit" />
                </form>
            </div>
        )
    }
}
