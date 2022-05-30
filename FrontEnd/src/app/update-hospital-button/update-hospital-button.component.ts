import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BackendService, Hospital } from '../backend.service';
import { UpdateHospitalButtonDialogComponent } from './update-hospital-button-dialog/update-hospital-button-dialog.component';

@Component({
  selector: 'update-hospital-button',
  templateUrl: './update-hospital-button.component.html',
  styleUrls: ['./update-hospital-button.component.css']
})
export class UpdateHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog, private backEnd: BackendService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return

    let hospital: Hospital = {
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

    this.backEnd.update_Hospital(hospital).subscribe(() => {
      this.dialog.open(UpdateHospitalButtonDialogComponent, {
        data: {...hospital}
      });
      form.resetForm()
      form.reset()
    })
  }

  ngOnInit(): void {
  }

}