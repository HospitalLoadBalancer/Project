import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface Hospital{
    id:string,
    name: string,
    location:{ lat: string, lng: string},
    address: string,
    number_of_beds: string,
    occupation : string
}


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  localHost = 'http://localhost:4000/'
  get_All_HospitalsURL = this.localHost+'get_All_Hospitals'
  get_Hospital_By_IdURL = this.localHost+'get_Hospital_By_Id?id='
  delete_Hospital_By_IdURL = this.localHost+'delete_Hospital_By_Id?id='
  add_HospitalURL = this.localHost+'add_Hospital'

  constructor(private http: HttpClient) { }

  get_All_Hospitals(): Observable<Hospital[]>{ 
    return this.http.get<Hospital[]>(this.get_All_HospitalsURL)
  }

  get_Hospital_By_Id(id:string){
    return this.http.get<Hospital>(this.get_Hospital_By_IdURL+id)
  }

  delete_Hospital_By_Id(id:string){
    return this.http.delete(this.delete_Hospital_By_IdURL+id)
  }

  add_Hospital(hospital: Hospital){
    return this.http.post<Hospital>(this.add_HospitalURL, hospital)
  }
}
