var employee = []
// employee.push(this)
function Employees(name, title, salary, status = 'Full-Time' ){
    employee.push(this)
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function (){
        console.log(this)
    }
    
}

let james = new Employees('James','Computer Software', '$30 / hr')
let sarah = new Employees('Sarah','Walmart Associate', '$30,000')
let raymond = new Employees('Raymond', 'Gas Station','$12/hr', 'Part-Time')
// raymond.status = 'pending'
console.log(employee)
james.printEmployeeForm()
sarah.printEmployeeForm()
// console.log(james)
// console.log(sarah)
// console.log(raymond)