import { Injectable } from '@angular/core';
import { Case } from './case.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class CaseService{

    constructor(private http: HttpClient){
    }

    createCase(caseData: Case){
        this.http
        .post<Case>('https://cors-anywhere.herokuapp.com/https://covid19api20200905141506.azurewebsites.net/api/cases',
         caseData)
         .subscribe(responseData => {
          console.log(responseData)
         });
    }

    fetchCase(){
        return this.http
        .get<Case>('https://cors-anywhere.herokuapp.com/https://covid19api20200905141506.azurewebsites.net/api/cases')
        .pipe(
          map(responseData => { //convert json to array of Case objects
          const casesArray : Case[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
            casesArray.push(responseData[key]);
          }
        }
        return casesArray;
        })
        );
    }

    deleteCase(caseId: Number){
        return this.http
        .delete('https://cors-anywhere.herokuapp.com/https://covid19api20200905141506.azurewebsites.net/api/cases/'
        +caseId);
    }

    editCase(caseId: Number, caseData: Case){
      console.log(caseId);
      console.log(caseData.id);
      return this.http
      .put('https://cors-anywhere.herokuapp.com/https://covid19api20200905141506.azurewebsites.net/api/cases/'
      +caseId, caseData, {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
    }

    getCase(caseId: Number){
      return this.http
      .get<Case>('https://cors-anywhere.herokuapp.com/https://covid19api20200905141506.azurewebsites.net/api/cases/'
      +caseId);
      }

    }