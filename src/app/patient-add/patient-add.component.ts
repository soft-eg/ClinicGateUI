import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';  
import { NgForm   } from '@angular/forms';  
import { Patient } from 'src/app/Models/Patient';  
import {PatientDataService} from '../DataServices/PatientDataService' 
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
 

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  @Output() addEvent = new EventEmitter<string>();  
  PatientEntity:Patient;  
  @Input() objPatient :Patient=new Patient();
  @ViewChild('closeBtn') cb: ElementRef;  
  dpConfig: Partial<BsDatepickerConfig> ;

constructor(private dataservice:PatientDataService) {
  this.dpConfig=Object.assign({},{ containerClass :'theme-dark-blue',showWeeksNumbers:false , dataInputFormata:'MM/dd/yyyy'} ) ;
}

 ngOnInit() {  
  }  

 Register(regForm:NgForm){    
 
  if (!(regForm.value.pasNumber) || !(regForm.value.forename)|| !(regForm.value.surname) || (
    regForm.value.SexCode==0) || !(regForm.value.DateOfBirth)) {
      alert('please check required field');
      return ;
  }else{
    
    this.PatientEntity=new  Patient();
    this.PatientEntity.PasNumber=regForm.value.pasNumber;  
    this.PatientEntity.Forenames=regForm.value.forename;  
    this.PatientEntity.Surname=regForm.value.surname;  
    this.PatientEntity.SexCode=regForm.value.SexCode;  
    this.PatientEntity.DateOfBirth=regForm.value.DateOfBirth;
   }

  this.dataservice.AddPatient(this.PatientEntity).subscribe(res=>{  
  this.TakeHome(regForm);  
}  
  )  
}   
  TakeHome(regForm:NgForm){  
     this.addEvent.emit();  
    this.cb.nativeElement.click();  
    regForm.reset();
  }
}
