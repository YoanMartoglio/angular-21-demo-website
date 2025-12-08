import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expertises } from './expertises';

describe('Expertises', () => {
  let component: Expertises;
  let fixture: ComponentFixture<Expertises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expertises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expertises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
