import { Component, OnInit } from '@angular/core';
import { Patient } from '../../shared/models/patient.model'
import { PatientService } from '../../shared/services/patient.service'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient;
  isSaved: boolean = false;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.isSaved = false;
    this.patient = new Patient();
    // this.patient.fullName = "Emily Bennet"
    // this.patient.email = "test@gmail.com"
    // this.patient.district = 2;
    // this.patient.gender = "Female";
    // this.patient.nic = "2000234224"
    // this.patient.sypmtom = "Lorem ipsum text"
  }

  savePatient() {
    console.log(this.patient)
    this.isSaved = true;
    
    this.patientService.savePatient(this.patient)
    .subscribe( res => {
    });
  }

}
