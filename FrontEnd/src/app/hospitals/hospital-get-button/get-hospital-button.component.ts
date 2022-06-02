import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HospitalHttpRequests } from '../hospital-services/hospital-http-requests/hospital-http-requests.service';
import { Hospital } from '../hospital.model';
import { GetHospitalButtonDialogComponent } from './get-hospital-button-dialog/get-hospital-button-dialog.component';

@Component({
  selector: 'get-hospital-button',
  templateUrl: './get-hospital-button.component.html',
  styleUrls: ['./get-hospital-button.component.css']
})
export class GetHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog, public backEnd:HospitalHttpRequests) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    this.backEnd.get_Hospital_By_Id(form.value.id).subscribe((data: Hospital) => {
      this.dialog.open(GetHospitalButtonDialogComponent, {
        data: {...data}
      });
      form.resetForm()
      form.reset()
    })
  }

  ngOnInit(): void {
  }

}