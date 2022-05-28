import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HospitalData } from '../add-hospital-button.component';

@Component({
  selector: 'app-add-hospital-button-dialog',
  templateUrl: './add-hospital-button-dialog.component.html',
  styleUrls: ['./add-hospital-button-dialog.component.css']
})
export class AddHospitalButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddHospitalButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HospitalData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
