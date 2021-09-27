import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordsuccessfulComponent } from './passwordsuccessful.component';

describe('PasswordsuccessfulComponent', () => {
  let component: PasswordsuccessfulComponent;
  let fixture: ComponentFixture<PasswordsuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordsuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
