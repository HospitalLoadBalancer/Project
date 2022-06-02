import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Hospital } from '../../hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalHttpRequests {
  private localHost = 'http://localhost:4000/'
  private get_All_HospitalsURL = this.localHost+'get_All_Hospitals'
  private get_Hospital_By_IdURL = this.localHost+'get_Hospital_By_Id?id='
  private delete_Hospital_By_IdURL = this.localHost+'delete_Hospital_By_Id?id='
  private add_HospitalURL = this.localHost+'add_Hospital'
  private update_HospitalURL = this.localHost+'update_Hospital'
  private hospitalsChangedNotice = new Subject<string>();

  constructor(private http: HttpClient) { }

  getHospitalsChangedNotice(){
    return this.hospitalsChangedNotice
  }

  get_All_Hospitals(): Observable<Hospital[]>{ 
    return this.http.get<Hospital[]>(this.get_All_HospitalsURL)
  }

  get_Hospital_By_Id(id:string){
    return this.http.get<Hospital>(this.get_Hospital_By_IdURL+id)
  }

  delete_Hospital_By_Id(id:string){
    return this.http.delete(this.delete_Hospital_By_IdURL+id, { responseType: 'text'})
  }

  add_Hospital(hospital: Hospital) {
    return this.http.post(this.add_HospitalURL, hospital, { responseType: 'text'})
  }

  update_Hospital(hospital: Hospital) {
    return this.http.post(this.update_HospitalURL, hospital, { responseType: 'text'})
  }
}
