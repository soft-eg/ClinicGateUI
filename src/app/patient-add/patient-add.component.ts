import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';  
import { NgForm   } from '@angular/forms';  
import { Patient } from 'src/app/Models/Patient';  
import {PatientDataService} from '../DataServices/PatientDataService' 
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  @Output() nameEvent = new EventEmitter<string>();  
  objtempemp:Patient;  
  @Input() objemp :Patient=new Patient();
  @ViewChild('closeBtn') cb: ElementRef;  
  dpConfig: Partial<BsDatepickerConfig> ;

constructor(private dataservice:PatientDataService,public datepipe: DatePipe) {
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

     
    this.objtempemp=new  Patient();
    this.objtempemp.PasNumber=regForm.value.pasNumber;  
    this.objtempemp.Forenames=regForm.value.forename;  
    this.objtempemp.Surname=regForm.value.surname;  
    this.objtempemp.SexCode=regForm.value.SexCode;  
    this.objtempemp.DateOfBirth=regForm.value.DateOfBirth;
   }

  this.dataservice.AddPatient(this.objtempemp).subscribe(res=>{  
  this.TakeHome(regForm);  
}  
  )  
}   
  TakeHome(regForm:NgForm){  
     this.nameEvent.emit("ccc");  
    this.cb.nativeElement.click();  
    regForm.reset();
  }
}
