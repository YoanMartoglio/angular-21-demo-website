import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoName } from './logo-name';

describe('LogoName', () => {
  let component: LogoName;
  let fixture: ComponentFixture<LogoName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
