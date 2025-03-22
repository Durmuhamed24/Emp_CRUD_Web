import axios from "axios"

const Employee_SAPI_BASE_URL = "http://localhost:8080/employees"
class EmployeeService{
    saveEmployee(employee){
            return axios.post(Employee_SAPI_BASE_URL,employee);
    }
    getEmployees(employee){
        return axios.get(Employee_SAPI_BASE_URL);
    }
    getEmployeebyId(id){
        return axios.get(Employee_SAPI_BASE_URL+"/"+id);
    }
    deleteEmployee(id){
        return axios.delete(Employee_SAPI_BASE_URL+"/"+id);
    }
    updateEmployee(employee,id){
        return axios.put(Employee_SAPI_BASE_URL+"/"+id,employee);
    }
}
export default new EmployeeService();