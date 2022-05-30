import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospital } from 'src/app/backend.service';

@Component({
  selector: 'get-hospital-button-dialog',
  templateUrl: './get-hospital-button-dialog.component.html',
  styleUrls: ['./get-hospital-button-dialog.component.css']
})
export class GetHospitalButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<GetHospitalButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hospital,
  ) {}

  ngOnInit(): void {
  }

}
