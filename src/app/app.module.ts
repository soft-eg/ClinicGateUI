import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { HttpClientModule } from '@angular/common/http';

import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { FormsModule } from '@angular/forms';
 
import { BsDatepickerModule  } from 'ngx-bootstrap/datepicker';
 
import { DatePipe } from '@angular/common'
 


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientAddComponent,
    PatientUpdateComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
