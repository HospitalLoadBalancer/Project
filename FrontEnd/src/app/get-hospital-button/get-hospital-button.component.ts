import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../backend.service';
import { GetHospitalButtonDialogComponent } from './get-hospital-button-dialog/get-hospital-button-dialog.component';

export interface HospitalData{
  id:string
}

@Component({
  selector: 'get-hospital-button',
  templateUrl: './get-hospital-button.component.html',
  styleUrls: ['./get-hospital-button.component.css']
})
export class GetHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog, public backEnd:BackendService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    this.dialog.open(GetHospitalButtonDialogComponent, {
      data:{
        id: form.value.id
      }
    });
    form.resetForm()
    form.reset()
  }

  ngOnInit(): void {
  }

}