import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrpgWebCalcWelcomeComponent } from './urpg-web-calc-welcome.component';

describe('UrpgWebCalcWelcomeComponent', () => {
  let component: UrpgWebCalcWelcomeComponent;
  let fixture: ComponentFixture<UrpgWebCalcWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrpgWebCalcWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrpgWebCalcWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
