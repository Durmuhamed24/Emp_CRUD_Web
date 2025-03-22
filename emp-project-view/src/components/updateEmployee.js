import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const UpdateEmployee = () => {  
    const { id } = useParams();  
    const navigate = useNavigate();  

    const [employee, setEmployee] = useState({
        id: id,
        name: "",
        phone: "",
        email: "",
    });

   useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await EmployeeService.getEmployees();
           console.log("Employees Data:", response.data);  // Debugging
           setEmployee(response.data);
         } catch (error) {
           console.log("Error fetching employees:", error);
         }
       };
     
       fetchData();
     }, []);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
            .then(() => navigate("/"))
            .catch((error) => console.error("Error updating employee:", error));
    };

    return (
        <div className="max-w-xl mx-40 bg-slate-800 rounded shadow py-4 px-8">
            <h2 className="text-4xl font-bold text-center">Update Employee</h2>
            <div className="mx-10 my-2">
                <input type="text" name="name" value={employee.name} onChange={(e) => handleChange(e)} className="w-full py-2 my-4 text-slate-800" placeholder="Name" />
                <input type="number" name="phone" value={employee.phone} onChange={(e) => handleChange(e)} className="w-full py-2 my-4 text-slate-800" placeholder="Phone" />
                <input type="email" name="email" value={employee.email} onChange={(e) => handleChange(e)} className="w-full py-2 my-4 text-slate-800" placeholder="Email" />
            </div>
            <div className="flex my-4 space-x-4 px-20">
                <button onClick={handleUpdate} className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded">Update</button>
                <button onClick={() => navigate("/")} className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded">Cancel</button>
            </div>
        </div>
    );
};

export default UpdateEmployee;
