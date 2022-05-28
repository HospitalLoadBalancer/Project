import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHospitalButtonComponent } from './delete-hospital-button.component';

describe('DeleteHospitalButtonComponent', () => {
  let component: DeleteHospitalButtonComponent;
  let fixture: ComponentFixture<DeleteHospitalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHospitalButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHospitalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
