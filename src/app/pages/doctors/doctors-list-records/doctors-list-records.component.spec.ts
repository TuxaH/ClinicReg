import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListRecordsComponent } from './doctors-list-records.component';

describe('DoctorsListRecordsComponent', () => {
  let component: DoctorsListRecordsComponent;
  let fixture: ComponentFixture<DoctorsListRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsListRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsListRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
