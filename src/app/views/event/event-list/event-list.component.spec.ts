import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { eventListComponent } from './event-list.component';

describe('eventListComponent', () => {
  let component: eventListComponent;
  let fixture: ComponentFixture<eventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ eventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(eventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
