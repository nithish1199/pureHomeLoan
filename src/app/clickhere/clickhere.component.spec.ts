import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickhereComponent } from './clickhere.component';

describe('ClickhereComponent', () => {
  let component: ClickhereComponent;
  let fixture: ComponentFixture<ClickhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
