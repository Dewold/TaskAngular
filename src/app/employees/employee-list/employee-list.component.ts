import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getEmployeeList().subscribe(() => {
      console.log(this.service.employeeList);
    });
  }
}
