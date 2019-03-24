 
import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Patient } from '../Models/Patient';
import { PatientDataService } from '../DataServices/PatientDataService';
import { PatientAddComponent } from '../patient-add/patient-add.component';  
import { PatientUpdateComponent } from '../patient-update/patient-update.component';  
import { DatePipe } from '@angular/common';
 
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
 providers:[PatientDataService]
 
})
export class PatientsComponent implements OnInit {

  patientlist:Patient[];
  dataavailbale: Boolean = false;  
  tempemp: Patient;
 
  
  constructor(private dataservice:PatientDataService ,public datepipe: DatePipe) { }

 ngOnInit() {
  this.LoadData();  
 }
 
LoadData() {  
  this.dataservice.getPatients().subscribe((tempdate) => {  
    this.patientlist = tempdate;  
    console.log(this.patientlist);  
    if (this.patientlist.length > 0) {  
      this.dataavailbale = true;  
 
    }  
    else {  
      this.dataavailbale = false;  
    }  
  }  
  )  
    , (err: any) => {  
      console.log(err);  
    }  
}  


deleteconfirmation(id: string) {
  if (confirm("Are you sure you want to delete this ?")) {
    this.tempemp = new Patient();
    this.tempemp.Id = id;
    this.dataservice.DeletePatient(this.tempemp).subscribe(res => {
      alert("Deleted successfully !!!");
      this.LoadData();
    })
  }
}

@ViewChild('patientadd') addcomponent: PatientAddComponent
@ViewChild('regForm') editcomponent: PatientUpdateComponent



loadAddnew() {
 
  this.addcomponent.objemp.PasNumber = ""
  this.addcomponent.objemp.Forenames = ""
  this.addcomponent.objemp.Surname = ""
  this.addcomponent.objemp.SexCode = 0
  this.addcomponent.objemp.DateOfBirth = ""
 
}




loadnewForm(id: string, PasNumber: string, Forenames: string, Surname: string, sexCode: number,DateOfBirth:string) {

 
  this.editcomponent.objemp.PasNumber = PasNumber
  this.editcomponent.objemp.Forenames = Forenames
  this.editcomponent.objemp.Surname = Surname
  this.editcomponent.objemp.SexCode = sexCode
  this.editcomponent.objemp.DateOfBirth = this.datepipe.transform(DateOfBirth ,'MM/dd/yyyy');  
  this.editcomponent.objemp.Id = id
 

}

RefreshData() {  

  this.LoadData();  
}  


 

}
