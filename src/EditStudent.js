import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export  default function EditStudent(){
    const {studentid}=useParams();
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");
    const[phone,setPhone]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
  fetch("http://localhost:8000/students/"+studentid) 
  .then((res)=>res.json())
  .then((data)=> {
     setId(data.id);
    setName(data.name);
    setPlace(data.place);
    setPhone(data.phone)
  }
)
  .catch((err)=>console.log(err.message))
  
    },[])
       
        const handleSubmit=(e) =>{
            e.preventDefault();
             const studentData={id,name,place,phone}; 
            fetch("http://localhost:8000/students/"+studentid,{
                method:'PUT',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(studentData)
            })
            .then((res)=>
                alert("Student has been updated succesfully."),
                setTimeout(
                    navigate("/"), 15000),
           
            )
            .catch((err) =>console.log(err.message))
        }
        return (
        <div className="container">
             
    <div className="card">    
    <form onSubmit={handleSubmit}>
    <div className="card-body">
         <h2 className="card-title">Update Student Details</h2>
         <div class="form-group">
        <label for="formGroupExampleInput">Id</label>
        <input type="text" class="form-control" id="id" required name="id" value={id} onChange={e=>setId(e.target.value)}/>
        
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Name</label>
        <input type="text"  class="form-control" id="name" required name="name" value={name} onChange={e=>setName(e.target.value)}/>
      
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Place</label>
        <input type="text" class="form-control" id="place" required name="place" value={place} onChange={e=>setPlace(e.target.value)}/>
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Phone</label>
        <input type="text" class="form-control" id="phone" required name="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
      </div>
      <br></br>
      <div class="form-group">
        <div className="row">
      <div class="col-sm-10"> 
        </div>
        <div class="col-sm-1">
          <Link to="/" class="btn btn-danger">Cancel</Link>
        </div>
        <div class="col-sm-1">
          <button class="btn btn-primary">Update</button>
        </div>
        </div>
      </div>
         </div>
         </form>
        </div>
        </div>
        )
        
        }