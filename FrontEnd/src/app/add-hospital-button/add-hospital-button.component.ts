import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddHospitalButtonDialogComponent } from './add-hospital-button-dialog/add-hospital-button-dialog.component';

export interface HospitalData {
  name: string
  address: string
  number_of_beds: string
  occupation: string
  lat: string
  lng: string
}

@Component({
  selector: 'add-hospital-button',
  templateUrl: './add-hospital-button.component.html',
  styleUrls: ['./add-hospital-button.component.css']
})
export class AddHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    this.dialog.open(AddHospitalButtonDialogComponent, {
      data: {
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