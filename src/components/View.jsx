import React, { useEffect,useState } from 'react'
import axios from 'axios'
function view() {
const [users, setUsers] = useState([]);
useEffect(
    ()=>{
        axios.get("http://localhost:3000/users").then(
            res=>{
                setUsers(res.data)
            }
        ).catch(err => {
                console.log(err)
            })
    }
)

const handledelete=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`).then(
        ()=>{
            setUsers(users.filter(user=>id!==user.id))
        }
    )
}
   const list=users.map(user=>
     <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td><button onClick={()=>{handledelete(user.id)}}>delete</button></td>

     </tr>
    
   )
  return (
    <>
    <table>
        <thead>
            <tr>
                <td>
                    name
                </td>
                <td>
                    email
                </td><td>
                    mobile
                </td>
            </tr>
        </thead>
        <tbody>
            {list}
        </tbody>
    </table>

    </>
  )
}

export default view