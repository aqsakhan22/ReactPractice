import React from 'react'
class CartItems extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <div>
                <h2>You order</h2>
               <ul>
                   {
                       this.props.additem.map((tasks,index)=><li key={index}>
                           {tasks}
                       </li>)
                   }
               </ul>
            </div>
        )
    }
}
export default CartItems ;