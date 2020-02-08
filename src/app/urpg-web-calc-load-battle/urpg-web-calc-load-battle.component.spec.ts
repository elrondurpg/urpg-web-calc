import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrpgWebCalcLoadBattleComponent } from './urpg-web-calc-load-battle.component';

describe('UrpgWebCalcLoadBattleComponent', () => {
  let component: UrpgWebCalcLoadBattleComponent;
  let fixture: ComponentFixture<UrpgWebCalcLoadBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrpgWebCalcLoadBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrpgWebCalcLoadBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
