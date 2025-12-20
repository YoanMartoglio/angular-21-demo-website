import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFabMini } from './button-fab-mini';

describe('ButtonFabMini', () => {
  let component: ButtonFabMini;
  let fixture: ComponentFixture<ButtonFabMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFabMini],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonFabMini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
