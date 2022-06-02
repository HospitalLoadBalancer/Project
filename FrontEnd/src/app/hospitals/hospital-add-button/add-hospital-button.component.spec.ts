import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospitalButtonComponent } from './add-hospital-button.component';

describe('AddHospitalButtonComponent', () => {
  let component: AddHospitalButtonComponent;
  let fixture: ComponentFixture<AddHospitalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHospitalButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHospitalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
