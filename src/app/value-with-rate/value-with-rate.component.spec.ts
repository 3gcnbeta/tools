import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueWithRateComponent } from './value-with-rate.component';

describe('ValueWithRateComponent', () => {
  let component: ValueWithRateComponent;
  let fixture: ComponentFixture<ValueWithRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueWithRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueWithRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
