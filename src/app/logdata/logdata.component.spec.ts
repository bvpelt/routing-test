import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdataComponent } from './logdata.component';

describe('LogdataComponent', () => {
  let component: LogdataComponent;
  let fixture: ComponentFixture<LogdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogdataComponent]
    });
    fixture = TestBed.createComponent(LogdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
