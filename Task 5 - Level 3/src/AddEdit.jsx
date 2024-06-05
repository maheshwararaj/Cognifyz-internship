import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AddEdit = ({setShowAddEdit,type,emp,setEmp,handleEdit}) => {
   
     
      const handlechange = (event)=>{
            const name = event.target.name;
            const value = event.target.value;
            setEmp(emp => ({...emp,[name]:value}))
      }

      const handleSubmit = async (event)=>{
        event.preventDefault()
        if(type == "Edit"){
            const response = await axios.post("http://localhost:3000/edit",{emp})
            setEmp(response.data.employees)
        }
        else{
            const response = await axios.post("http://localhost:3000/add",{emp})
            setEmp(response.data.employees)
        }
        setShowAddEdit(false)
      }
  return (
    <div className='addedit'>
       
        <form  className="addedit-container" onSubmit={handleSubmit}>
            <div className="title">
                <h2>{type} Employee</h2>
                <p onClick={()=> setShowAddEdit(false)}> X </p>
            </div>
            
            <input type="text" placeholder='Employee ID' value={emp.empid} onChange={handlechange} name="empid" />
            <input type="text" placeholder='Name' value={emp.name} onChange={handlechange} name="name"  />
            <input type="email" placeholder='Email' value={emp.email} onChange={handlechange} name="email"  />
            <input type="text" placeholder='designation' value={emp.designation} onChange={handlechange} name="designation"  />
            <button type='submit'>{type}</button>
        </form>
    </div>
  )
}

export default AddEdit