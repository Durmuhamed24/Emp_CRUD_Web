package com.project.em.project;

import java.util.List;

public interface Service {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id,Employee employee);


}
