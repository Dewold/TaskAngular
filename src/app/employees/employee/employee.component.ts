import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { PositionService } from 'src/app/shared/position.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    public positionService: PositionService) { }

  ngOnInit(): void {
    this.resetEmployeeForm();
    this.positionService.getAllPositions().subscribe(() => {
      console.log(this.positionService.positionList);
    });
  }

  resetEmployeeForm(form?: NgForm) {
    if(form != null) {
      form.resetForm();
    }

    this.service.employeeForm = {
      Id: null,
      FirstName: '',
      LastName: '',
      Position: null,
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
