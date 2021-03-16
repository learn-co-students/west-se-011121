import React, { Component } from 'react'

export default class BookCard extends Component {
    render() {
        console.log(this.props)
        const {title, author} = this.props
        return (
            <div>
                <h2>Title: {title}</h2>
                <h3>Author: {author}</h3>
            </div>
        )
    }
}
