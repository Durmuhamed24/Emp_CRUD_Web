package com.project.em.project;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service {

    @Autowired
    private  EmployeeRepository employeeRepo;
    List<Employee> employees = new ArrayList<>();

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepo.save(employeeEntity);
//        employees.add(employee);
        return "Saved Successfully";
    }
    @Override
    public List<Employee> readEmployees() {
        // Retrieve all EmployeeEntity objects from the database
        List<EmployeeEntity> employeesList = employeeRepo.findAll();
        List<Employee> employees = new ArrayList<>();
        for (EmployeeEntity emp : employeesList) {
            Employee employee = new Employee();
            employee.setName(emp.getName());
            employee.setPhone(emp.getPhone());
            employee.setId(emp.getId());
            employee.setEmail(emp.getEmail());
            employees.add(employee);
        }

        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = employeeRepo.findById(id).get();
        employeeRepo.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity exestingEmployee = employeeRepo.findById(id).get();

        exestingEmployee.setEmail(employee.getEmail());
        exestingEmployee.setName(employee.getName());
        exestingEmployee.setPhone(employee.getPhone());
        employeeRepo.save(exestingEmployee);
        return "update Successfully";
    }
}
