import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private readonly rootUrl = "https://localhost:44354/api";
  public employeeList: Employee[];
  public employeeForm: Employee;

  constructor(private http: HttpClient) { }

  getEmployeeList() {
     return this.http.get<Employee[]>(this.rootUrl + '/Employee')
     .pipe(tap((data) => 
        this.employeeList = data)
     );
  }

  postEmployee(formData: Employee) {
    return this.http.post(this.rootUrl + '/Employee', formData);
  }
}
