import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HospitalBackEnd } from '../hospital-services/hospital-http-requests/hospital-backEnd.service';
import { DeleteHospitalButtonDialogComponent } from './delete-hospital-button-dialog/delete-hospital-button-dialog.component';

export interface HospitalData{
  id:string
}

@Component({
  selector: 'delete-hospital-button',
  templateUrl: './delete-hospital-button.component.html',
  styleUrls: ['./delete-hospital-button.component.css']
})
export class DeleteHospitalButtonComponent{
  constructor(public dialog: MatDialog, private backEnd: HospitalBackEnd) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) return
    this.backEnd.delete_Hospital_By_Id(form.value.id).subscribe(() => {
        this.deleteProcedure(form)
    })
  }

  private deleteProcedure(form: NgForm){
    this.showDeleteDialog(form.value.id)
    form.resetForm()
    form.reset()
    this.backEnd.getHospitalsChangedNotice().next("Hospital deleted")
  }

  private showDeleteDialog(hospitalId: number){
    this.dialog.open(DeleteHospitalButtonDialogComponent, {
      data:{
        id: hospitalId
      }
    })
  }

}