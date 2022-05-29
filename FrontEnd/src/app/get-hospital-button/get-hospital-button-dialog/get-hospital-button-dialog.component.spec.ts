import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHospitalButtonDialogComponent } from './get-hospital-button-dialog.component';

describe('GetHospitalButtonDialogComponent', () => {
  let component: GetHospitalButtonDialogComponent;
  let fixture: ComponentFixture<GetHospitalButtonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHospitalButtonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHospitalButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
