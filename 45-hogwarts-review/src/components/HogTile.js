import React, { Component } from 'react'

export default class HogTile extends Component {

    // using Class field (ES6) to initialize state and bind it to an instance (instead of constructor)
    state = {
        show: true
    }

    render() {
        // destructuring assignment below (2 layers)
        const { hog, chooseHog } = this.props
        const { name } = hog

        // formats hog.name into the necessary filename to import hog images
        const filename = name.toLowerCase().split(' ').join('_')
        const pigImage = require(`../hog-imgs/${filename}.jpg`)
        
        return (
            // Implements Semantic Card from Semantic UI library
            
            // <div className="ui eight wide column pigTile" style={this.state.show ? {} : {display: 'none'}} >
            <div className="ui pink card" style={this.state.show ? {} : {display: 'none'}} >
                <div className='image'>
                    <img onClick={() => chooseHog(hog)} src={pigImage} alt="a cute pig" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div onClick={()=> this.setState({show: false})} className="ui bottom attached button">
                    Hide Hog
                </div>
                {/* <button onClick={()=> this.setState({show: false})}>X</button> */}
            </div>
        )
    }
}
