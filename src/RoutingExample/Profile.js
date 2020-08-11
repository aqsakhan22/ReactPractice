import React from 'react'
class Profile extends React.Component{
    
    render(){
        return(
            <div>
                <h2>Profile</h2>
        <h3>{this.props.match.params.name}</h3>
            </div>
        )
    }
}
export default Profile;