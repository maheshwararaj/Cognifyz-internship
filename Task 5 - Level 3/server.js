import express,{response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3000


app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port,()=>{
    console.log("Server Running");
})

//sample data
let employees = [{
    empid:"1",
    name:"mahesh",
    email:"mahesh@mail.com",
    designation:"Designer",
    doj:"30-05-2023"
  },
  {
    empid:"2",
    name:"karan",
    email:"mahesh@mail.com",
    designation:"Designer",
    doj:"30-05-2023"
  },
  {
    empid:"3",
    name:"Bala",
    email:"mahesh@mail.com",
    designation:"Designer",
    doj:"30-05-2023"
  }]

app.get("/",(req,res)=>{
    console.log(req.body.name)
    
    res.json({success:true})
})

app.get("/getlist",(req,res)=>{
  
    res.json({success:true,employees})
})
app.post("/add",(req,res)=>{
  const emp = req.body.emp;
  employees.push(emp)
  res.json({success:true,employees})
})
app.post("/edit",(req,res)=>{
  const emp = req.body.emp
  employees = employees.map((employee)=>{
    if(employee.empid == emp.empid){
      return emp;
    }
    else return employee;
  })

  res.json({success:true,employees})

})
app.post("/delete",(req,res)=>{
  const empId = req.body.empId;

  employees = employees.filter(employee=>{
    return employee.empid != empId;
  })

  res.json({success:true,employees})
  
})