import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//declarations
import { AppComponent } from './app.component';

//imports
import { AppRoutingModule } from './app-routing.module';
import { HospitalTableComponent } from './hospital-table/hospital-table.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HospitalTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
