import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Patient} from '../Models/Patient';
import {ROOT_URL} from '../Models/Config';
import { Injectable }   from '@angular/core';
import { DatePipe } from '@angular/common';
@Injectable()
export class PatientDataService
{
    constructor(private http:HttpClient ,public datepipe: DatePipe)
    {

    }

getPatients()
{
 return this.http.get<Patient[]>(ROOT_URL + '/patients')
}
 
AddPatient(entity:Patient)
{
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    PasNumber:entity.PasNumber,
    Forenames:entity.Forenames,
    Surname:entity.Surname,
    SexCode:entity.SexCode,
    DateOfBirth:  this.datepipe.transform(entity.DateOfBirth ,'MM/dd/yyyy')
  }

return this.http.post<Patient>(ROOT_URL+'/patients',body,{headers})

}
 

EditPatient(entity:Patient)
{
 
  
 const params = new HttpParams().set('Id', entity.Id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    PasNumber:entity.PasNumber,
    Forenames:entity.Forenames,
    Surname:entity.Surname ,
    SexCode: entity.SexCode,
    DateOfBirth:   entity.DateOfBirth  
    ,Id:entity.Id
             }
        return this.http.put<Patient>(ROOT_URL+'/patients/'+entity.Id,body,{headers,params})

}




DeletePatient(entity:Patient)
{
    const params = new HttpParams().set('Id', entity.Id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
  Id:entity.Id
             }
        return this.http.delete<Patient>(ROOT_URL+'/patients/'+entity.Id)

} 
}