import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BackendService, Hospital } from '../backend.service';
import { AddHospitalButtonDialogComponent } from './add-hospital-button-dialog/add-hospital-button-dialog.component';

@Component({
  selector: 'add-hospital-button',
  templateUrl: './add-hospital-button.component.html',
  styleUrls: ['./add-hospital-button.component.css']
})
export class AddHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog, private backEnd: BackendService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return

    let hospital: Hospital = {
      id: form.value.id,
      name: form.value.name,
      address: form.value.address,
      number_of_beds: form.value.number_of_beds,
      occupation: form.value.occupation,
      location: {
          lat: form.value.lat,
          lng: form.value.lng
        }
    }

    this.backEnd.add_Hospital(hospital).subscribe(() => {
      this.dialog.open(AddHospitalButtonDialogComponent, {
        data: {...hospital}
      });
      form.resetForm()
      form.reset()
    })
  }

  ngOnInit(): void {
  }

}