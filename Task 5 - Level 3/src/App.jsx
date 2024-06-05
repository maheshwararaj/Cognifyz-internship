import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import AddEdit from './AddEdit'
const App = () => {
  
  const [employeeList,setEmployeeList] = useState([])
  const [showAddEdit,setShowAddEdit] = useState(false)
 
  const [emp,setEmp] = useState({
    empid:"",
    name:"",
    email:"",
    designation:""
  })
  const [type,setType] = useState("Add")
  
  const fetchList = async ()=>{
    const response = await axios.get("http://localhost:3000/getlist")
    if(response.data.success){
      setEmployeeList(response.data.employees)
    }
  }
  
  const handleAdd = ()=>{
    setType("Add")
    setEmp({empid:"",
    name:"",
    email:"",
    designation:""})
    setShowAddEdit(true)
    
  }
  const handleEdit = (employee)=>{
    setType("Edit")
    setEmp(employee)
    setShowAddEdit(true)
  }

  const handleDelete =async (empId) =>{
  
    const response = await axios.post("http://localhost:3000/delete",{empId})
    setEmployeeList(response.data.employees)
  }
  useEffect(()=>{
    fetchList();
  },[emp])
  return (

    
    <div className='app'>
      {showAddEdit ? <AddEdit setShowAddEdit={setShowAddEdit} type={type} setEmp={setEmp} handleEdit={handleEdit} emp={emp}/>  :"" }
      <h2 className='ttl'>Employee Management System</h2>
      <div className="flex">
        <h2>Employee List</h2>
        <button onClick={()=>handleAdd()} className='add'>Add Employee</button>
      </div>
      
      <div className="table">
      <table className='employee-table' >
          <tr className='header'>
            <th>EmpID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {
            employeeList.map((emp,index)=>{
              return(
              <tr key={index}>
                <td>{emp.empid}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.designation}</td>
                <td><button className='edit' onClick={()=>handleEdit(emp)}>Edit</button></td>
                <td><button className='delete' onClick={()=>handleDelete(emp.empid)}>Delete</button></td>
              </tr>
              );
            })
          }
      </table>
    </div>
    </div>
  )
}

export default App