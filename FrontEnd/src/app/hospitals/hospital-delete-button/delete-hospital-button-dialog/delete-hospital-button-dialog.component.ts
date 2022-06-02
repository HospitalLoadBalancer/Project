import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HospitalData } from '../delete-hospital-button.component';

@Component({
  selector: 'app-delete-hospital-button-dialog',
  templateUrl: './delete-hospital-button-dialog.component.html',
  styleUrls: ['./delete-hospital-button-dialog.component.css']
})
export class DeleteHospitalButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteHospitalButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HospitalData,
  ) {}

  ngOnInit(): void {
  }

}
