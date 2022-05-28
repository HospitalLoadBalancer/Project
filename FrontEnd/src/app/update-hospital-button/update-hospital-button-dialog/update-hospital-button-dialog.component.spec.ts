import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospitalButtonDialogComponent } from './update-hospital-button-dialog.component';

describe('UpdateHospitalButtonDialogComponent', () => {
  let component: UpdateHospitalButtonDialogComponent;
  let fixture: ComponentFixture<UpdateHospitalButtonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHospitalButtonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHospitalButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
