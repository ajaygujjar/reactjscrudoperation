import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom"

export  default function ViewStudent(){
   const {studentid}=useParams();
  const [studentData,setStudentData]=useState({});
  useEffect(()=>{
fetch("http://localhost:8000/students/"+studentid) 
.then((res)=>res.json())
.then((data)=>setStudentData(data))
.catch((err)=>console.log(err.message))

  })
   
    return (
    <div className="container">
        <h2>View Student Record</h2>
        <div className="card">
        <div className="card-body">
            {
         studentData && <><div className="form-group">
                            <label>Id :{studentData.id} </label>
                        </div><div class="form-group">
                                <label for="formGroupExampleInput2">Name :{studentData.name} </label>
                            </div><div class="form-group">
                                <label for="formGroupExampleInput2">Place :{studentData.place} </label>
                            </div><div class="form-group">
                                <label for="formGroupExampleInput2">Phone :{studentData.phone} </label>
                            </div><div class="form-group">
                                <Link to="/">Back</Link>
                            </div></>
}
        </div>  
        </div>
    </div>
    
    )
    
    }