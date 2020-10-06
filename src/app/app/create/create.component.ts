import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Case } from '../case.model';
import { CaseService } from '../cases.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private caseService: CaseService) { }

  ngOnInit(): void {
  }

  onCreateCase(caseData: Case){
    console.log(caseData);
    this.caseService.createCase(caseData);
    this.router.navigate(['/']);
  }

}
