import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//declarations
import { AppComponent } from './app.component';
import { ButtonsMenuComponent } from './buttons-menu/buttons-menu.component';
import { HospitalTableComponent } from './hospital-table/hospital-table.component';
import { AddHospitalButtonComponent } from './add-hospital-button/add-hospital-button.component';
import { UpdateHospitalButtonComponent } from './update-hospital-button/update-hospital-button.component';

//imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AddHospitalButtonDialogComponent } from './add-hospital-button/add-hospital-button-dialog/add-hospital-button-dialog.component';
import { UpdateHospitalButtonDialogComponent } from './update-hospital-button/update-hospital-button-dialog/update-hospital-button-dialog.component';
import { DeleteHospitalButtonComponent } from './delete-hospital-button/delete-hospital-button.component';
import { DeleteHospitalButtonDialogComponent } from './delete-hospital-button/delete-hospital-button-dialog/delete-hospital-button-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HospitalTableComponent,
    ButtonsMenuComponent,
    AddHospitalButtonComponent,
    UpdateHospitalButtonComponent,
    AddHospitalButtonDialogComponent,
    UpdateHospitalButtonDialogComponent,
    DeleteHospitalButtonComponent,
    DeleteHospitalButtonDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule, 
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
