import { fakeAuth } from '../http/fakeAuth'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';



export const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated(props)
      ? props.location.search.indexOf("p=") > 0 ?
         <Redirect to={{
           pathname: '/guest/nut',
            state: { from: props.location }
          }} />
        : <Component {...props} />
      : <Redirect to={{
        pathname: props.location.search.indexOf("p=") > 0 ? '/guest/nut':'/guest/login',
          state: { from: props.location }
        }} />
  )} />
)


const FriendlyRoutesOld = ({ component: Component, ...rest }) => {
  //console.log(Component)
  //console.log(rest.access.success)
  return (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated(props)
        ? props.location.search.indexOf("p=") > 0 ?
           <Redirect to={{ pathname: '/guest/nut', state: { from: props.location }}} />
          //: <Component {...props} />
      //: rest.access.success !== true ? <Redirect params={{a:12}} to={{pathname: `/n/accessing?x=${rest.location.pathname}`, state: { from: props.location }}} /> : <Component {...props} />
          : rest.access.success !== true ? <Redirect to={{pathname: `/guest/accessing`, searchxxx:`x=${rest.location.pathname}`, state: { from: props.location }}} /> : <Component {...props} />
        : <Redirect to={{ pathname: props.location.search.indexOf("p=") > 0 ? '/guest/nut':'/guest/login', state: { from: props.location }}} />
    )} />
  )
}

const FriendlyRoutes = ({ component: Component, ...rest }) => {
  let element

  //console.log(rest)
  if(fakeAuth.isAuthenticated(rest)){
    if(rest.accessState === true)
      element = (<Component {...rest} />)
    else
      element = (<Redirect to={{pathname: `/guest/accessing`, searchxx:`x=${rest.location.pathname}`, state: { from: rest.location }}} />)
  }else
    element = (<Redirect to={{ pathname: rest.location.search.indexOf("p=") > 0 ? '/guest/nut':'/guest/login', state: { from: rest.location }}} />)

  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}

FriendlyRoutes.propTypes = {
  //auth: PropTypes.object.isRequired,
  accessState: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  //auth: state.auth,
  accessState: state.auth.access.success
})

export default connect(mapStateToProps)(FriendlyRoutes)

