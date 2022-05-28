import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HospitalData } from '../update-hospital-button.component';

@Component({
  selector: 'app-update-hospital-button-dialog',
  templateUrl: './update-hospital-button-dialog.component.html',
  styleUrls: ['./update-hospital-button-dialog.component.css']
})
export class UpdateHospitalButtonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateHospitalButtonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HospitalData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
