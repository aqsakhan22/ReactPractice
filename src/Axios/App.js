import React from 'react'
import axios from 'axios'
class App extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
            id:''
        }
    }
    body;
    title;
    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then((response)=>{
        //     // console.log(response.data[1])
        //     console.log(response)
        // })
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            // console.log(response.data);
            // const adddata=this.state.posts;
        
            // adddata.push(response.data[1].title);
            // this.setState({posts:adddata});
            const post=response.data;
            console.log(post)
            this.setState({posts:post});
            
        })


    }
    addData=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            body:this.body.value,
            title:this.title.value
        })
        console.log(this.body.value,this.title.value);
    }

    handleSubmit=event =>{
        event.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`,{
            body:this.body.value,
            title:this.title.value
        })
        .then(res =>{
            console.log("deleted value",res.data)
        })

    }
    handlechange= event=>{
        this.setState({id:event.target.value})
    }
    handleUpdate=event =>{
event.preventDefault();
axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`,{
    title:this.title.value,
    body:this.body.value
})
.then(res =>{
    console.log("updated value",res.data)
})
    }
render(){
    return(
        <div>
            <h2>App</h2> 
            <ul>
                {
                    this.state.posts.map((tasks,index)=><li key={index}>
                        {tasks.title}
                    </li>)
                }
            </ul>
            <h3>user add data</h3>
    
           <input placeholder="body" ref={element => this.body=element}/>
           <input placeholder="title" ref={element => this.title=element} />
           <button onClick={(e)=>this.addData(e)}>add data</button>
           <h3> Delete data</h3>
           <form onSubmit={this.handleSubmit}>
           <span>Id:</span>
           <input type="text" name="id" onChange={this.handlechange}/>
           <br/>
           <input type="text" placeholder="body" ref={element => this.body=element} />
             
           <br/>
           <input type="text" placeholder="title" ref={element=> this.title=element}/>
<br/>
<button type="submit">Delete</button>
           </form>
           
<h3>update data</h3>
<form onSubmit={this.handleUpdate}>
           <span>Id:</span>
           <input type="text" name="id" onChange={this.handlechange}/>
           <br/>
           <input type="text" placeholder="body" ref={element => this.body=element} />
             
           <br/>
           <input type="text" placeholder="title" ref={element=> this.title=element}/>
           <button type="submit">Update</button>
</form>

        </div>
    )
}
}
export default App;