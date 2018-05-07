import React from 'react';

const FriendlyRoutes = ({ component: Component, ...rest }) => {
  let element
  element = (<Component {...rest} />)
  return (
    <Route {...rest} render={ (props) => (element)} />
  )
}


export default FriendlyRoutes
//export default connect(mapStateToProps)(FriendlyRoutes)
