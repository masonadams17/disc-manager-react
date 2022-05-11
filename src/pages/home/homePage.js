import React, { Component } from 'react';
import AccountMenu from '../../components/navBar/navBar'; 
export default class HomePage extends Component {
   
  constructor(props){
    super(props)
    this.state = { homePage: "Home Page"}
  }

  render() {
    return (
      <div>
        <AccountMenu />
        <h1>HomePage</h1>
      </div>
    )
  }
}
