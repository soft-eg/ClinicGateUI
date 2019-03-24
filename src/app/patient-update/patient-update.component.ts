import {  Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef} from '@angular/core';
import {PatientDataService} from '../DataServices/PatientDataService'  
import { NgForm } from '@angular/forms';  
import { Patient } from 'src/app/Models/Patient';  
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  dpConfig: Partial<BsDatepickerConfig> ;
  constructor(private dataservice:PatientDataService,public datepipe: DatePipe) {  
    this.dpConfig=Object.assign({},{ containerClass :'theme-dark-blue',showWeeksNumbers:false , dataInputFormata:'DD/MM/YYYY'} ) ;

  }  
  @Output() nameEvent = new EventEmitter<string>();  
  @ViewChild('closeBtn') cb: ElementRef;  
  ngOnInit() {  
  }  


  @ViewChild('regForm') myForm: NgForm;  
  @Input() isReset: boolean = false;  
  objtempemp:Patient;  
  @Input() objemp :Patient=new Patient();  
  EditPatient(regForm:NgForm)  
  {  

 
  if (!(regForm.value.pasNumber) || !(regForm.value.forename)|| !(regForm.value.surname) || (this.objemp.SexCode==0) || !(this.objemp.DateOfBirth)) {
    alert('please check required field');
    return ;
} 


    this.dataservice.EditPatient(this.objemp).subscribe(res=>  
      {  
      alert("Patient updated successfully");  
      this.nameEvent.emit("ccc");  
      this.cb.nativeElement.click();  
       
      },  
  )};  
}

