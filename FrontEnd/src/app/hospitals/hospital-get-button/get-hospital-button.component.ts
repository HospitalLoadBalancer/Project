import { Component } from '@angular/core';
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
export class GetHospitalButtonComponent{
  constructor(public dialog: MatDialog, public backEnd:HospitalHttpRequests) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    
    this.backEnd.get_Hospital_By_Id(form.value.id).subscribe((data: Hospital) => {
      this.getHospitalProcedure(data, form)
    })
  }

  getHospitalProcedure(hospital: Hospital, form: NgForm){
    this.dialog.open(GetHospitalButtonDialogComponent, {
      data: hospital
    });
    form.resetForm()
    form.reset()
  }
}