import React from 'react'
import CartItem from './CartItem'
class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:["milk","eggs","powder"],
            orderitems:[]
        }
    }

    addtocart=(itemvalue)=>{
        console.log(itemvalue);
        const additems=this.state.orderitems;
        additems.push(itemvalue)
        this.setState({orderitems:additems})

    }
    render(){
        
        return(

            <div>
                
        <h2>we have {this.state.items.length} items</h2>
        <ul>
            {
                this.state.items.map((tasks,index)=><li key={index}>

                    {tasks} <button onClick={()=>this.addtocart(tasks)}>add to cart</button> 
                </li>)
            }
        </ul>
        <CartItem additem={this.state.orderitems} />
            </div>
            
        )
    }
}
export default ShoppingCart;