import React from 'react'
import TodoItems from './TodoItems'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:'',
            tasks:[]
        }
    }
    onchangeText=(event)=>{
        
       const value=event.target.value;
       console.log(value);
       this.setState({current:value});

    }
add=()=>{
const value=this.state.current;
const addedTask=this.state.tasks;
addedTask.push(value)
this.setState({tasks:addedTask})
}
delItems=(indexvalue)=>{
const delvalue=this.state.tasks
delvalue.splice(indexvalue,1);
this.setState({tasks:delvalue})


}
updateTask=(updateindex)=>{
    const updateTask=this.state.tasks
    updateTask[updateindex]=prompt("enter value to edit",updateTask[updateindex])
    this.setState({tasks:updateTask})

}
render(){
    return(
        <div>
            <input type="text" onChange={this.onchangeText}   placeholder="enter data" />
           <button onClick={this.add}>Add</button>
           <TodoItems items={this.state.tasks} del={this.delItems} update={this.updateTask}/> 
           {/* items ka mtlb humy array dikhana hai todo items may */}
        </div>
    )
}


}
export default TodoList;