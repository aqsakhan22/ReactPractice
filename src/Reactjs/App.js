import React from 'react'
class App extends React.Component{
  
    render(){
        var name="aqsa"
        const click=()=>{
            document.write("hi i am aqsa")
        }
        const dummy=()=>{
            return "dummy text"
        }
        return(
            <div>
               <h1>Hello this is my first typing</h1> 
               <h3>{name}</h3>
               <button onClick={click}>click</button>
               <br/>
               <button onClick={dummy}>Dummy </button>
            </div>
        )
    }
}
export default App;