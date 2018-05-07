import { fakeAuth } from '../http/fakeAuth'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';


const AccessingMiddleware = ({ component: Component, ...rest }) => {
  let element

  if(rest.accessState === true && rest.location.pathname === `/guest/accessing`){
    if(rest.location.state){
      element = (<Redirect to={{pathname: rest.location.state.from.pathname, state: { from: rest.location }}} />)
    }else
      element = (<Redirect to={{pathname: `/app/softphone`, state: { from: rest.location }}} />)

  }else
    element = (<Component {...rest} />)

  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}

AccessingMiddleware.propTypes = {
  accessState: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  accessState: state.auth.access.success
})

export default connect(mapStateToProps)(AccessingMiddleware)

