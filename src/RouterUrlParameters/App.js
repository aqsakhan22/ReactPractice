import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import User from './Users'
import Contact from './Contact'
import Home from './Home'
class App extends  React.Component{
render(){
    return(
        <div>

            <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/users/:userid" component={User}></Route>
            <Route path="/contact"><Contact/></Route>
            </Switch>


        </div>
    )
}
}
export default App;