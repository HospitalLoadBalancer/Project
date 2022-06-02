import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HospitalHttpRequests } from '../hospital-services/hospital-http-requests/hospital-http-requests.service';
import { Hospital } from '../hospital.model';

/**
 * @title Table with sticky header
 */
@Component({
  selector: 'hospital-table',
  styleUrls: ['hospital-table.component.css'],
  templateUrl: 'hospital-table.component.html',
})
export class HospitalTableComponent{
  displayedColumns = ['id', "name", 'address', 'number_of_beds', 'occupation', 'lat', 'lng'];
  dataSource = new MatTableDataSource<Hospital>();
  constructor(private _liveAnnouncer: LiveAnnouncer, private backEnd: HospitalHttpRequests) {}

  @ViewChild(MatSort)
    sort!: MatSort;

    ngOnInit(): void{
      this.getHospitals("Table Init")
      this.backEnd.getHospitalsChangedNotice().subscribe((message : string) => {
        this.getHospitals(message)
      })
    }
    
    getHospitals(message:string){
        this.backEnd.get_All_Hospitals().subscribe((data: Hospital[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        console.log(message)
        }) 
    }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}