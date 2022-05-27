import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//declarations
import { AppComponent } from './app.component';

//imports
import { AppRoutingModule } from './app-routing.module';
import { HospitalTableComponent } from './hospital-table/hospital-table.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HospitalTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
