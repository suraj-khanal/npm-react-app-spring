import { useState } from "react";
import {retrieveAllTodosForUserApi ,  deleteTodoApi } from "./api/TodoApiService";
import { useEffect } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
  //const today = new Date();
  // const targetDate = new Date(
  //   today.getFullYear() + 12,
  //   today.getMonth(),
  //   today.getDay()
  // );

const authContext = useAuth()
const username = authContext.username

const[todos, setTodos] = useState([])

const[message, setMessage] = useState(null)

const navigate = useNavigate()

useEffect (
  () =>  refreshTodos(),[]
)

function refreshTodos(){
  retrieveAllTodosForUserApi(username)
  .then(response =>{ 
    setTodos(response.data) 
  })
  .catch(error => console.log(error) )
}

function deleteTodo(id){
  console.log('delete clicked ' + id)
  deleteTodoApi(username, id)
  .then( () => {
    setMessage(`Delete of todo with Id = ${id} successful`)
    refreshTodos()
  }
    //1. Display Messgae
    //2. Update Todos List
  )
  .catch (error => console.log(error))
}

function updateTodo(id){
  console.log('update clicked ' + id)
  navigate(`/todo/${id}`)
}
function addNewTodo(){
  navigate(`/todo/-1`)
}


  return (
    <div className="container">
      <h1>Things You want to do</h1>
      {message && <div className="alert alert-warning">{message}</div> } 
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                {/* <td>{todo.targetDate.toDateString()}</td> */}
                <td>{todo.targetDate.toString()}</td>
                <td> <button className="btn btn-warning"
                  onClick={() => deleteTodo(todo.id)} >Delete</button> </td>

                <td> <button className="btn btn-info"
                  onClick={() => updateTodo(todo.id)} >Update</button> </td>  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn btn-success m-4" onClick={addNewTodo} >Add New Todo</div>
    </div>
  );
}
