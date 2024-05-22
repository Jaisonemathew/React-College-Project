import React from 'react'


import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

const Registration = () => {

  /***************************************** */
  const [rollno, setRollno] = useState(null);

  /**************************************** */

  /***********for max(rollno)****************** */
useEffect(()=>{
  axios.get('http://localhost:3001/getMaxrollno')
   .then(result=>{
    const new_rollno = result.data.maxValue + 1;
    setRollno(new_rollno);
   })
  .catch(err=>console.log(err))
},[])

/******************************************************** */
const [name,setName]=useState()
const [address,setAddress]=useState()
const [email,setEmail]=useState()
const [contactno,setContactno]=useState()

const [course, setCourse] = useState('MCA');
const [gender, setGender] = useState(); 
 /**************** */
 const navigate=useNavigate()

/******************* */
const handleSubmit=(e) =>{
  e.preventDefault()
  axios.post('http://localhost:3001/registration',{rollno,name, gender, course,address,email,contactno})
  .then(result=>{console.log(result)
    alert("registration completed successfully")
    navigate('/Stud_details') 
  }) 
  .catch(err=>console.log(err))
  }
 
/******************************************************** */
  return (

<div>
    <center>
    

 
    <div className=" p-5 mt-5 bg-primary-subtle w-25 rounded">
       <h2 className='text-decoration-underline text-success'>Register Here...</h2>
    <form onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="rollno">
    <strong> Rollno</strong>
    </label>
    <input type="text" autoComplete="off" name="rollno" value={rollno} readOnly className="form-control rounded-0 text-center" onChange={(e)=>setRollno(e.target.value)} />
    </div>

    <div className="mb-3">
    <label htmlFor="name">
    <strong> Name</strong>
    </label>
    <input type="text" placeholder="Enter Name" autoComplete="off" name="name" className="form-control" onChange={(e)=>setName(e.target.value)} required/>
    </div>
<div className="mb-3">
            <strong>Gender:</strong>
            <fieldset required>
            <div>
              <label>
                <input type="radio" name="gender" value="Male" onChange={() => setGender('Male')} required/>
                Male
              </label>    <label>
                <input type="radio" name="gender" value="Female"  onChange={() => setGender('Female')} />
                Female
              </label>
            </div>
            </fieldset>
             
          </div>


    <div className="mb-3">
            <label htmlFor="course"><strong> Course</strong></label>
            <select className="form-select" value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
              <option value="MSc">MSc</option>
              <option value="BBA">BBA</option>
            </select>
     </div>


    <div className="mb-3">
    <label htmlFor="address">
    <strong> Address</strong>
    </label>
   
    <textarea  name="address" class="form-control" placeholder="Enter Address" rows="4" onChange={(e)=>setAddress(e.target.value)} required></textarea>
    </div>

    <div className="mb-3">
    <label htmlFor="email">
    <strong> Emailid</strong>
    </label>
    <input type="email" placeholder="Enter Emailid" autoComplete="off" name="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} required pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}" title="Please enter a valid email address"/>
    </div>

    <div className="mb-3">
    <label htmlFor="contactno">
    <strong> Contact no</strong>
    </label>
    <input type="text" placeholder="Enter contactno" autoComplete="off" name="contactno" className="form-control" onChange={(e)=>setContactno(e.target.value)} required pattern="[0-9]{10}" title="Please enter a 10-digit numeric contact number"/>
    </div>

    <button type="submit" className="btn btn-success w-100">Register</button>
 
    </form>
    </div>
    <br></br><br/><br/>
    </center>
    <br></br>
    </div>
  )
}

export default Registration
