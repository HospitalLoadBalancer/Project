import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospitalButtonComponent } from './update-hospital-button.component';

describe('UpdateHospitalButtonComponent', () => {
  let component: UpdateHospitalButtonComponent;
  let fixture: ComponentFixture<UpdateHospitalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHospitalButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHospitalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
