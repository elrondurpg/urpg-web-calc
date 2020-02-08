import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrpgWebCalcBattleComponent } from './urpg-web-calc-battle.component';

describe('UrpgWebCalcBattleComponent', () => {
  let component: UrpgWebCalcBattleComponent;
  let fixture: ComponentFixture<UrpgWebCalcBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrpgWebCalcBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrpgWebCalcBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
