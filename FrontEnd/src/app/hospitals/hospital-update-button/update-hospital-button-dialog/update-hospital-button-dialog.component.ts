import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Hospital } from 'src/app/hospitals/hospital.model';

@Component({
  selector: 'app-update-hospital-button-dialog',
  templateUrl: './update-hospital-button-dialog.component.html',
  styleUrls: ['./update-hospital-button-dialog.component.css']
})
export class UpdateHospitalButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateHospitalButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hospital,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
