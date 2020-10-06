import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Case } from '../case.model';
import { CaseService } from '../cases.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('caseForm') editCaseForm: NgForm;

  loadedCases : Case[] = [];
  isFetching = false; 
  editMode = false;
  caseId: Number;
  caseToEdit: Case;
  //Two-way binding for form elemnets
  firstName: String;
  lastName: String;
  withChronicDiseases: boolean;
  status: String;

  constructor(private http: HttpClient, private caseService: CaseService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.caseService.fetchCase()
    .subscribe(cases =>{
      this.isFetching = false;
      this.loadedCases = cases;
    }); 
   }

   deleteCase(caseId: Number){
    this.caseService.deleteCase(caseId).subscribe();
    this.ngOnInit();
   }
   
   editCaseData(editedCase: Case, caseId: Number){
     //create the new case obj
     this.caseToEdit = {
      id: caseId,
      firstName: this.firstName,
      lastName: this.lastName,
      status: this.status,
      withChronicDiseases: this.withChronicDiseases,
      dateOfBirth: new Date(),
      dateOfConfirmation: new Date()
     };
     //send the new object with the id
    this.caseService.editCase(caseId, this.caseToEdit).subscribe();
    this.ngOnInit();
     }
}
