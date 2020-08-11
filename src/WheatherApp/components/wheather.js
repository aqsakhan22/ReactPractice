import React from 'react'

export default class wheather extends React.Component{
    render(){
        return(
            <div className="weather__info">
                

        {  this.props.city && this.props.country && <p className="weather__value">Location {this.props.city},{this.props.country}</p>}
        {this.props.temperature && <p className="weather__value">Temperature:{this.props.temperature}</p>}
        {this.props.humidity && <p className="weather__value">Temperature:{this.props.humidity}</p>}     
        {this.props.description && <p className="weather__value">Temperature:{this.props.description}</p>}        
            
        {this.props.error && <p className="weather__value">{this.props.error}</p>}
            </div>

        )
    }
}