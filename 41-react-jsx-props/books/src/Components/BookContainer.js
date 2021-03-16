import React, { Component } from 'react'
import BookCard from './BookCard'

export default class BookContainer extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>BookContainer</h2>
                <p>{this.props.arr}</p>
                <p>{this.props.num}</p>
                <BookCard title="The Eloquent JS" author="Syd"/>
                <BookCard title="You Don't Know JS" author="Adan"/>
                <BookCard title="The Big Book of JS"/>
                <BookCard title="Everything You Wanted Know about JS"/>
            </div>
        )
    }
}
