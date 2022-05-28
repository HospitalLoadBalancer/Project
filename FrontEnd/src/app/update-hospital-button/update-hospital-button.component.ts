import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdateHospitalButtonDialogComponent } from './update-hospital-button-dialog/update-hospital-button-dialog.component';


export interface HospitalData {
  id: string
  name: string
  address: string
  number_of_beds: string
  occupation: string
  lat: string
  lng: string
}

@Component({
  selector: 'update-hospital-button',
  templateUrl: './update-hospital-button.component.html',
  styleUrls: ['./update-hospital-button.component.css']
})
export class UpdateHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    this.dialog.open(UpdateHospitalButtonDialogComponent, {
      data: {
        id: form.value.id,
        name: form.value.name,
        address: form.value.address,
        number_of_beds: form.value.number_of_beds,
        occupation: form.value.occupation,
        lat: form.value.lat,
        lng: form.value.lng,
      }
    });
    form.resetForm()
    form.reset()
  }

  ngOnInit(): void {
  }

}