import React from 'react'

class Users extends React.Component{

render(){
    
    console.log(this.props) 
    return(
       
        <div>
            <h2>Users</h2>
    <h3>{this.props.match.params.userid}</h3>
    <h4>{this.props.match.params.url}</h4>
        </div>
    )
}
}
export default Users;