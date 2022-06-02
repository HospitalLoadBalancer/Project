import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HospitalHttpRequests } from '../hospital-services/hospital-http-requests/hospital-http-requests.service';
import { Hospital } from '../hospital.model';
import { AddHospitalButtonDialogComponent } from './add-hospital-button-dialog/add-hospital-button-dialog.component';

@Component({
  selector: 'add-hospital-button',
  templateUrl: './add-hospital-button.component.html',
  styleUrls: ['./add-hospital-button.component.css']
})
export class AddHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog, private backEnd: HospitalHttpRequests) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    let hospital = this.createHospitalFromForm(form)
    this.backEnd.add_Hospital(hospital).subscribe(() => {
      this.addProcedure(hospital, form)
    })
  }

  createHospitalFromForm(form: NgForm): Hospital{
    return {
      id: form.value.id+'',
      name: form.value.name,
      address: form.value.address,
      number_of_beds: form.value.number_of_beds+'',
      occupation: form.value.occupation+'',
      location: {
          lat: form.value.lat+'',
          lng: form.value.lng+''
        }
    }
  }

  addProcedure(hospital: Hospital, form: NgForm){
    this.dialog.open(AddHospitalButtonDialogComponent, {
      data: hospital
    });
    form.resetForm()
    form.reset()
    this.backEnd.getHospitalsChangedNotice().next("Hospital added")
  }

  ngOnInit(): void {
  }

}