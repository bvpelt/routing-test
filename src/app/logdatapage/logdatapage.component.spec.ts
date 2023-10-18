import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdatapageComponent } from './logdatapage.component';

describe('LogdatapageComponent', () => {
  let component: LogdatapageComponent;
  let fixture: ComponentFixture<LogdatapageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogdatapageComponent]
    });
    fixture = TestBed.createComponent(LogdatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
