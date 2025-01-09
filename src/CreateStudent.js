import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export  default function CreateStudent(){
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");
    const[phone,setPhone]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e) =>{
        e.preventDefault();
         const studentData={id,name,place,phone}; 
        fetch("http://localhost:8000/students",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(studentData)
        })
        .then((res)=>
            alert("Student has been created succesfully."),
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
     <h2 className="card-title">Create Student</h2>
     <div class="form-group">
    <label for="formGroupExampleInput">Id</label>
    <input type="text" class="form-control" id="id" required name="id" value={id} onChange={e=>setId(e.target.value)} placeholder="Id"/>
    
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Name</label>
    <input type="text"  class="form-control" id="name" required name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
  
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Place</label>
    <input type="text" class="form-control" id="place" required name="place" value={place} onChange={e=>setPlace(e.target.value)}  placeholder="Place"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Phone</label>
    <input type="text" class="form-control" id="phone" required name="phone" value={phone} onChange={e=>setPhone(e.target.value)}  placeholder="Phone"/>
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
      <button class="btn btn-primary">Submit</button>
    </div>
    </div>
  </div>
     </div>
     </form>
    </div>
    </div>
    )
    
    }