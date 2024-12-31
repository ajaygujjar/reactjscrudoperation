import { useEffect,useState } from "react";
import {   Link,useNavigate } from "react-router-dom";

export  default function StudentTable(){
    const [students,setStudents]=useState(""); 
    const navigate=useNavigate();
    const DeleteStudent=(id)=>{
         if(window.confirm("Are you sure want to delete?"))
         {
            fetch("http://localhost:8000/students/"+id,{
                method:'Delete', 
            })
            .then((res)=>{
                alert("Student has been deleted succesfully.");
                  window.location.reload();
            })
         }
        
    }
    const EditDetails=(id)=>{
         
        navigate("student/edit/"+id)
    }
    const DisplayDetails=(id)=>{
         
        navigate("student/view/"+id)
    }
    useEffect(()=>{
fetch('http://localhost:8000/students')
.then((res) =>res.json())
.then((response) =>
    setStudents(response)
 
)
.catch((err) => console.log(err.message))
},[])
return (
   
<div className="card">    
<form>
<div className="card-body">
     <h2 className="card-title">Student Record</h2>
     <div className="tablecontainer">
        <Link to="/student/create" className="btn btn-success">Add new student</Link>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Place</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
        students && students.map((item,index) =>
    <tr>
      <th scope="row">{ index+1}</th>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.place}</td>
      <td>
        <button  onClick={()=>DeleteStudent(item.id)} class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete</button>
        
        <button onClick={()=>EditDetails(item.id)}  class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit">Edit</button>
        
        <button onClick={()=>DisplayDetails(item.id)}  class="btn btn-warning btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="View">View</button>
        
        </td>
    </tr>
)}
     
  </tbody>
</table>
        </div> 
</div>
</form>
</div>
)

}