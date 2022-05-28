import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospitalButtonDialogComponent } from './add-hospital-button-dialog.component';

describe('AddHospitalButtonDialogComponent', () => {
  let component: AddHospitalButtonDialogComponent;
  let fixture: ComponentFixture<AddHospitalButtonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHospitalButtonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHospitalButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
