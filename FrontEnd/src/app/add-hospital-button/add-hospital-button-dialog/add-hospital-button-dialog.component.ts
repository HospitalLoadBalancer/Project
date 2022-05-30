import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/backend.service';

@Component({
  selector: 'app-add-hospital-button-dialog',
  templateUrl: './add-hospital-button-dialog.component.html',
  styleUrls: ['./add-hospital-button-dialog.component.css']
})
export class AddHospitalButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddHospitalButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hospital,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
