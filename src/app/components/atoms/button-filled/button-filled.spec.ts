import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFilled } from './button-filled';

describe('ButtonFilled', () => {
  let component: ButtonFilled;
  let fixture: ComponentFixture<ButtonFilled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFilled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFilled);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
