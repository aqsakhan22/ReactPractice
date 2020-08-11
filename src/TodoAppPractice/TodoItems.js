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
                   this.props.items.map((tasks,index)=>
               <li key={index}>{tasks} <button onClick={()=>this.props.del(index)}>delete</button><button onClick={()=>this.props.update(index)}>Update</button>            </li>
                   )
               }
           </ul>
        </div>
    )
}


}
export default TodoItems;