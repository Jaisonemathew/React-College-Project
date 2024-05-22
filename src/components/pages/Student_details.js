import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Student_details = () => {
/********************** */
const [students,setStudents]=useState([])


useEffect(()=>{
  axios.get('http://localhost:3001/getStudents')
  .then(result=>setStudents(result.data))
  .catch(err=>console.log(err))
},[])


/***************************** */
const DeleteHandler=(rno)=>{
  axios.delete('http://localhost:3001/deleteStudent/'+rno)
  .then(result=>{
    console.log(result)
    alert("Student Details Deleted Successfully......")
//---------- after delete for re-fetching student details---------------------
  axios.get('http://localhost:3001/getStudents')
  .then(result=>setStudents(result.data))
  .catch(err=>console.log(err))
//-----------------end----------------------------------

})
  .catch(err=>console.log(err))
}

/******************************* */
  return (
      <div>
        
      <center>
    <h1 className='text-decoration-underline text-center text-black'>Student_details</h1>
    <div className='w-75 bg-white rounded p-3'>
       
<table className='table border border-3 border-info'>
<thead>
    <tr>
    <th>Rollno</th> 
    <th>Name</th>   
    <th>Gender</th> 
    <th>Course</th> 
    <th>Address</th>
    <th>Emailid</th>
    <th>ContactNo</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
</thead>
<tbody>
{
    students.map((student)=>{
      return <tr>
         <td>{student.rollno}</td>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>{student.course}</td>
            <td>{student.address}</td>
            <td>{student.email}</td>
            <td>{student.contactno}</td>
            <td> <Link to={'/update/' + student.rollno} className='btn btn-success'> -- Edit -- </Link></td>
            <td> <button className='btn btn-danger' onClick={(e)=>DeleteHandler(student.rollno)}>Delete</button> </td>
        </tr>
    })
}

</tbody>

</table>
<br/><br/><br/><br/><br/>
    </div>


    </center>

    </div>
  )
}

export default Student_details