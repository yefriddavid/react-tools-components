import React from 'react';

const FriendlyRoutes = ({ component: Component, ...rest }) => {
  let element

  if(fakeAuth.isAuthenticated(rest)){
    if(rest.accessState === true)
      element = (<Component {...rest} />)
    else
      element = (<Redirect to={{pathname: `/guest/accessing`, state: { from: rest.location }}} />)
  }else{
    if(rest.location.search.indexOf("p=") > 0){
      element = (<Redirect to={{ pathname: '/guest/nut', state: { from: rest.location }}} />)
    else{
      element = (<Redirect to={{ pathname: '/auth/login'}} />)
    }
  }

  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}

FriendlyRoutes.propTypes = {
  accessState: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  accessState: state.auth.access.success
})

export default connect(mapStateToProps)(FriendlyRoutes)
