import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingtableComponent } from './pendingtable.component';

describe('PendingtableComponent', () => {
  let component: PendingtableComponent;
  let fixture: ComponentFixture<PendingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
