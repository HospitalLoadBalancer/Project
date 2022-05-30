import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../backend.service';
import { DeleteHospitalButtonDialogComponent } from './delete-hospital-button-dialog/delete-hospital-button-dialog.component';

export interface HospitalData{
  id:string
}

@Component({
  selector: 'delete-hospital-button',
  templateUrl: './delete-hospital-button.component.html',
  styleUrls: ['./delete-hospital-button.component.css']
})
export class DeleteHospitalButtonComponent implements OnInit {
  constructor(public dialog: MatDialog, private backEnd: BackendService) { }

  onSubmit(form: NgForm): void {

    if (form.invalid) return
    this.backEnd.delete_Hospital_By_Id(form.value.id).subscribe(() => {
      this.dialog.open(DeleteHospitalButtonDialogComponent, {
        data:{
          id: form.value.id
        }
      });
      form.resetForm()
      form.reset()
    })
  }

  ngOnInit(): void {
  }

}