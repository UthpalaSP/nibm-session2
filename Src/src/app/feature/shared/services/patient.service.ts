import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Test } from '../models/test.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  savePatient(patient: Patient) {
    return this.httpClient.post(environment.apiUrl + '/patient', patient);
  }

  getChartData(){
    return this.httpClient.get(environment.apiUrl + '/chart');
  }

  saveTest(test: Test) {
    return this.httpClient.post(environment.apiUrl + '/result', test);
  }
}
