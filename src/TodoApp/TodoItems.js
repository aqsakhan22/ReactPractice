import React from 'react'

class TodoItems extends React.Component{
    constructor(props){
        super(props);

        
    }
    render(){
        return(
            <div>
        <ul>
            {
                //task is value , and index is key
this.props.items.map((task,index)=>

<li key={index}>{task} <button onClick={()=>this.props.update(index)}>update</button><button onClick={()=>this.props.del(index)}>delete</button></li>
)

            }
        </ul>
            </div>
        )
    }
}
export default TodoItems;