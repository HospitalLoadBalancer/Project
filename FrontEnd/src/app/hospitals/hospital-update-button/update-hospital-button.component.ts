import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HospitalHttpRequests} from '../hospital-services/hospital-http-requests/hospital-http-requests.service';
import { Hospital } from '../hospital.model';
import { UpdateHospitalButtonDialogComponent } from './update-hospital-button-dialog/update-hospital-button-dialog.component';

@Component({
  selector: 'update-hospital-button',
  templateUrl: './update-hospital-button.component.html',
  styleUrls: ['./update-hospital-button.component.css']
})
export class UpdateHospitalButtonComponent {
  constructor(public dialog: MatDialog, private backEnd: HospitalHttpRequests) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return

    let hospital = this.createHospitalFromForm(form)
    this.backEnd.update_Hospital(hospital).subscribe(() => {
        this.updateProcedure(hospital, form)
    })
  }

  private createHospitalFromForm(form: NgForm): Hospital{
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

  private updateProcedure(hospital: Hospital, form: NgForm){
    this.dialog.open(UpdateHospitalButtonDialogComponent, {
      data: hospital
    });
    form.resetForm()
    form.reset()
    this.backEnd.getHospitalsChangedNotice().next("Hospital updated")
  }
}