import React ,{Component} from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import {Route,Link,Switch} from 'react-router-dom'
import Parameters from './Parameters'
class App extends Component{
    render(){
        return(
            <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        <Switch>
        <Route path="/" exact>

<Home/>

</Route>

<Route path="/about">
<About/>

</Route>

<Route path="/profile/:name" component={Profile}>

</Route>

        </Switch>
       
       <Parameters/>
            </div>
        )
    }
}
export default App;