import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExtendedFab } from './button-extended-fab';

describe('ButtonExtendedFab', () => {
  let component: ButtonExtendedFab;
  let fixture: ComponentFixture<ButtonExtendedFab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonExtendedFab],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonExtendedFab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
