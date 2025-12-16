import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRound } from './icon-round';

describe('IconRound', () => {
  let component: IconRound;
  let fixture: ComponentFixture<IconRound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconRound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
