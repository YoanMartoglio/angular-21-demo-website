import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFab } from './button-fab';

describe('ButtonFab', () => {
  let component: ButtonFab;
  let fixture: ComponentFixture<ButtonFab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFab],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonFab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
