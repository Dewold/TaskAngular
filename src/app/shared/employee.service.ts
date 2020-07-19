import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeForm: Employee;
  employeeList: Employee[];

  constructor() { }

  
}
