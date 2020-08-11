import React from 'react'

export default class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getwheather}>
              
                <input type="text"  name="city" placeholder="city"/>
                <input type="text" name="country" placeholder="country"/>
                <button>generate</button>
                </form>
                
            </div>
        )
    }
}