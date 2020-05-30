import React, { Component } from 'react'
import './App.css'



class Card extends Component  {
  
  render() {
  
    return (
      <li>
        <h1> {this.props.person.name.first}</h1>
        <img src={this.props.person.picture.large} />
      </li>
    )
    }
  
    


}

export default Card;
