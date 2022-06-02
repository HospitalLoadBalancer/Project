import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHospitalButtonDialogComponent } from './delete-hospital-button-dialog.component';

describe('DeleteHospitalButtonDialogComponent', () => {
  let component: DeleteHospitalButtonDialogComponent;
  let fixture: ComponentFixture<DeleteHospitalButtonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHospitalButtonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHospitalButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
