import React, { Component } from "react";
import { Route } from "react-router-dom"
import PropTypes from 'prop-types'
import Home from './components/Home'

export default class StrictAccess extends Component {
  redirect = () => {
    alert('Access denied');
    return <Route path='/' component={ Home } />
  }
  render() {
    const { user: { username, password }} = this.props
    return(
      <div>
        {
          (username === 'joao' 
            && password === '1234') ? <p>Welcome João</p> : this.redirect()
        }
      </div>
    )
  }
}

StrictAccess.propTypes = {
  user: PropTypes.object,
}