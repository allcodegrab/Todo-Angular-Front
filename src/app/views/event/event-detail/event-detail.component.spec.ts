import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eventDetailComponent } from './event-detail.component';

describe('eventDetailComponent', () => {
  let component: eventDetailComponent;
  let fixture: ComponentFixture<eventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
