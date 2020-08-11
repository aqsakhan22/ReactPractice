import React from 'react'
import TodoItems from './TodoItems'
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // current:'',
            tasks:[],
            noteditmode:true,
        }
    }
inputRef=React.createRef();
localIndex=undefined;
    //jesi he input may text ayga wo yaha ayga pehly currentvalue ko add keryga
    updateCurrentTask=(event)=>{
        const value=event.target.value;
        console.log(value);
        this.setState({current:value}); 
    }
addTask=()=>{ 
    const addedTasks=this.state.tasks;
    // addedTasks.push(this.state.current);
    addedTasks.push(this.inputRef.current.value)
    this.setState({tasks:addedTasks});
    this.inputRef.current.value='';
    
}
delTask=(valueIndex)=>{
console.log(valueIndex);
const deletedTask=this.state.tasks;
deletedTask.splice(valueIndex,1);
this.setState({tasks:deletedTask})

}
updateTask=(updateValue)=>{
    this.localIndex=updateValue;
    this.setState({noteditmode:false});

    console.log(updateValue);
    const updateTask=this.state.tasks;
// updateTask[updateValue]=prompt("enter updated value",updateTask[updateValue])
this.inputRef.current.value=updateTask[updateValue];

this.setState({tasks:updateTask});



}
cancel=()=>{
    this.setState({noteditmode:true})
    this.inputRef.current.value=""
}
onUpdate=ev=>{
    ev.preventDefault();
    const existTask=this.state.tasks;
existTask[this.localIndex]=this.inputRef.current.value;
this.setState({tasks:existTask,noteditmode:true})
this.inputRef.current.value=""

}
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef} onChange={this.updateCurrentTask}   placeholder="enter data" id="text" />
            
            {
                this.state.noteditmode ? //if true
                <button onClick={this.addTask} >Add</button>
                : //else
                <span>
                     <button onClick={this.onUpdate} >Edit</button>
                     <button onClick={this.cancel} >Cancel</button>
                </span>

            }
            

            <TodoItems items={this.state.tasks} del={this.delTask} update={this.updateTask}/> 
            </div>

        )
    }
}
export default TodoList;