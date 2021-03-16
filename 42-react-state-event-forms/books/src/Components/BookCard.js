import React from 'react'
import '../styles/BookCard.css'

class BookCard extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         read: 3
    //     }
    // }

    state = {
        read: 0
    }

    handleClick = () => {
        // this.state.read += 1 // ANTI-PATTERN mutates state directly
        // this.setState({ read: this.state.read + 1}) // ANTI-PATTERN
        // this.setState((prevState) => {
        //     return {
        //         read: prevState.read + 1
        //     }
        // })
        // console.log(this.props)
        this.props.addToTotalRead()
        this.setState({...this.state, read: this.state.read + 1})
    }

    render(){
        return(
           <div className="card">
               <h2> title: {this.props.title}</h2>
               <h2> author: {this.props.author}</h2>
               <img src={this.props.img} style={{width:"100px"}} alt={this.props.title}></img>
                <br/>
                <button onClick={this.handleClick}> read {this.state.read} </button> 
            </div> 
        )
    }
}

export default BookCard