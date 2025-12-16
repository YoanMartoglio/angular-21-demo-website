import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorks } from './home-works';

describe('HomeWorks', () => {
  let component: HomeWorks;
  let fixture: ComponentFixture<HomeWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
