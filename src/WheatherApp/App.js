import React from 'react'

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/wheather'

const API_KEY="454fb23f3ba36d8809ebfd3eba8dcadf"

export default class App extends React.Component{
     constructor(props){
         super(props);
         this.state={
             temperature:undefined,
             city:undefined,
             country:undefined,
             humidity:undefined,
             description:undefined,
             error:undefined
         }
     }
    getwheather = async (e)=>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
       const api_url=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        //first convert into json format
        const data=api_url.json();
        console.log(data);
        if(city && country){

            this.setState({
                temperature:data.main.temp,
                city:data.name,
                country:data.sys.country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:""
        
        
                })
        }
       
       else{
        this.setState({
            temperature:undefined,
            city:undefined,
            country:undefined,
            humidity:undefined,
            description:undefined,
            error:"please enter value"
    
    
            })
       }
    }
    render(){
        return(
            <div>
                  <div className="wrapper">
                      
                  <div className="main">
                  <div className="container">
                      
                  <div className="row">
                      
                  <div className="col-xs-5 title-container">
                  <Title/>
                </div>
                <div className="col-xs-7 form-container">
                <Form getwheather={this.getwheather}/>
                <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}  
               
               />
                </div>
                      </div>
                      </div>

                      </div>
                  </div>
               
               
               
            </div>
        )
    }
}