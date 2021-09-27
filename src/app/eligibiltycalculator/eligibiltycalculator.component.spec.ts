import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiltycalculatorComponent } from './eligibiltycalculator.component';

describe('EligibiltycalculatorComponent', () => {
  let component: EligibiltycalculatorComponent;
  let fixture: ComponentFixture<EligibiltycalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibiltycalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiltycalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
