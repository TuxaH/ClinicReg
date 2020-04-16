import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPositionsComponent } from './doctors-positions.component';

describe('DoctorsPositionsComponent', () => {
  let component: DoctorsPositionsComponent;
  let fixture: ComponentFixture<DoctorsPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
