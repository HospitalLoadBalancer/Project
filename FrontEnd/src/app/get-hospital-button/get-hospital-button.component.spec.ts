import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHospitalButtonComponent } from './get-hospital-button.component';

describe('GetHospitalButtonComponent', () => {
  let component: GetHospitalButtonComponent;
  let fixture: ComponentFixture<GetHospitalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHospitalButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHospitalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
