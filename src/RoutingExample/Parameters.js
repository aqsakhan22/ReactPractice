import React from 'react'
import { useParams,Link,Route} from 'react-router-dom'
export default function Parameters(){
    return(
        <div>
            <h2>Name of students</h2>
    <ul>
        <li>
            <Link to="/aqsa">
              aqsa
            </Link>
        </li>
        <li>
            <Link to="/sania">
             sania
            </Link>
        </li>
    </ul>
    <Route path="/:id" children={<Child/>}></Route>
        </div>
    );
}
function Child(){
let {id}=useParams(); //vahi naam rakna hai jo route k path may parameter ka naam diya hai
return(
    <div>
        <h2>Id:{id}</h2>
    </div>
)
}