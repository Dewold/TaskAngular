import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/shared/position.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})

export class PositionComponent implements OnInit {

  constructor(public service: PositionService) { }

  ngOnInit(): void {
    this.resetPositionForm();
  }

  resetPositionForm(form?: NgForm) {
    if(form != null) {
      form.resetForm();
    }

    this.service.positionForm = {
      Id: null,
      Name: ''
    }
  }

  onSubmitPosition(form: NgForm) {
    this.createPosition(form);
  }

  createPosition(form: NgForm) {
    this.service.postPosition(form.value).subscribe(res => {
      this.resetPositionForm(form);
    });
  }

}
