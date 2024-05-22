import React, { useEffect } from "react";
import Axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";

const Update = () => {
/******************************************************** */
 const {rno}=useParams()
console.log("--------------rno----"+{rno})
const [name,setName]=useState()
const [address,setAddress]=useState()
const [email,setEmail]=useState()
const [contactno,setContactno]=useState()


const [course, setCourse] = useState('');
const [gender, setGender] = useState(''); 
 /**************** */
useEffect(()=>{
    axios.get('http://localhost:3001/getStudent/'+rno)
    .then(result=>{
        setName(result.data.name)
        setAddress(result.data.address)
        setEmail(result.data.email)
        setContactno(result.data.contactno)

        setGender(result.data.gender)
        setCourse(result.data.course)
    })
    .catch(err=>console.log(err))
},[])
   //**************
   const navigate=useNavigate()

   /******************* */
   const updatestud=(e) =>{
     e.preventDefault() 
     axios.put('http://localhost:3001/updateStudent/'+rno,{name,gender,course,address,email,contactno})
     .then(result=>{console.log(result)
       alert("Updated successfully.....")
     navigate('/Stud_details') 
   
     }) 
     .catch(err=>console.log(err))
     }
   //************ */

  return (
    <div>
  <center>
<div className=" p-5 mt-5 bg-primary-subtle w-25 rounded">

<h2 className='text-decoration-underline text-success'> Update Here...</h2>
    <h4 className='text-decoration-underline text-primary'>Rollno:{rno}</h4>
    <form onSubmit={updatestud}>
    
    <div className="mb-3">
    <label htmlFor="name">
    <strong> Name</strong>
    </label>
    <input type="text" value={name} placeholder="Enter Name" autoComplete="off" name="name" className="form-control rounded-0" onChange={(e)=>setName(e.target.value)}/>
    </div>

    <div className="mb-3">
            <strong>Gender:</strong>
            <div>
              <label>
                <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                Male
              </label>
              &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
              <label>
                <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                Female
              </label>
            </div>
     </div>
     

     <div className="mb-3">
            <label htmlFor="course"><strong>Course</strong></label>
            <select className="form-select" value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
              <option value="MSc">MSc</option>
            </select>
          </div>



    <div className="mb-3">
    <label htmlFor="address">
    <strong> Address</strong>
    </label>
    <input type="text" value={address} placeholder="Enter Address" autoComplete="off" name="address" className="form-control rounded-0" onChange={(e)=>setAddress(e.target.value)}/>
    </div>

    <div className="mb-3">
    <label htmlFor="email">
    <strong> Emailid</strong>
    </label>
    <input type="text" value={email} placeholder="Enter Emailid" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e)=>setEmail(e.target.value)}/>
    </div>

    <div className="mb-3">
    <label htmlFor="contactno">
    <strong> Contact no</strong>
    </label>
    <input type="text" value={contactno} placeholder="Enter contactno" autoComplete="off" name="contactno" className="form-control rounded-0" onChange={(e)=>setContactno(e.target.value)}/>
    </div>

    <button type="submit" className="btn btn-success w-100 rounded">Update</button>
    
    </form>
    </div>
    <br></br><br/><br/>
    </center>
    
    </div>
  )
}

export default Update