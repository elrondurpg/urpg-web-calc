import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrpgWebCalcLoadRulesComponent } from './urpg-web-calc-load-rules.component';

describe('UrpgWebCalcLoadRulesComponent', () => {
  let component: UrpgWebCalcLoadRulesComponent;
  let fixture: ComponentFixture<UrpgWebCalcLoadRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrpgWebCalcLoadRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrpgWebCalcLoadRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
