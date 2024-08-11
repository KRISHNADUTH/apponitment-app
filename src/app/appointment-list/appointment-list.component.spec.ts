import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApponitmentListComponent } from './appointment-list.component';

describe('ApponitmentListComponent', () => {
  let component: ApponitmentListComponent;
  let fixture: ComponentFixture<ApponitmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApponitmentListComponent]
    });
    fixture = TestBed.createComponent(ApponitmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
