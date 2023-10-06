import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermlinkComponent } from './permlink.component';

describe('PermlinkComponent', () => {
  let component: PermlinkComponent;
  let fixture: ComponentFixture<PermlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermlinkComponent]
    });
    fixture = TestBed.createComponent(PermlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
