import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit(): void {
    this.resetEmployeeForm();
  }

  resetEmployeeForm(form?: NgForm) {
    if(form != null) {
      form.resetForm();
    }

    this.service.employeeForm = {
      Id: null,
      FirstName: 'Fef',
      LastName: 'Fe',
      PositionId: null,
      Salary: null,
      HireDate: null,
      DismissalDate: null
    }
  }

  onSubmit(form : NgForm) {
    this.insertEmployee(form);
  }

  insertEmployee(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.resetEmployeeForm(form);
    })

  }
}
