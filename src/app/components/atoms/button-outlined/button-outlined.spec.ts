import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlined } from './button-outlined';

describe('ButtonOutlined', () => {
  let component: ButtonOutlined;
  let fixture: ComponentFixture<ButtonOutlined>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOutlined]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutlined);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
