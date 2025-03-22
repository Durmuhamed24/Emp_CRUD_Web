package com.project.em.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Controller {

    @Autowired
    Service service;

    @GetMapping("employees")
    public List<Employee> getAllEmployees(){
            return service.readEmployees();
    }

    @PostMapping("employees")
    public String CreateEmployee(@RequestBody Employee employee){
       return service.createEmployee(employee);
    }


    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {
           service.deleteEmployee(id);
    return "Delete Successfully";
    }
    @PutMapping("employees/{id}")
    public String update(@PathVariable Long id,@RequestBody Employee employee){
        return service.updateEmployee(id,employee);
    }

}
