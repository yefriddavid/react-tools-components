import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory(
  {
    //    initialEntries: [req.path],
    //basename: "/toolbar/",
    forceRefresh: true
  }
)


history.listen(location => {
  //alert("xxx")
  //console.log(location.pathname) // /home
})
  /*if(action.payload != undefined && action.payload.status==401){
        browserHistory.push('login');
        console.log('session expired');
}*/

export default history

