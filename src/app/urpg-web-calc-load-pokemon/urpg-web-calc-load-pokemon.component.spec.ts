import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrpgWebCalcLoadPokemonComponent } from './urpg-web-calc-load-pokemon.component';

describe('UrpgWebCalcLoadPokemonComponent', () => {
  let component: UrpgWebCalcLoadPokemonComponent;
  let fixture: ComponentFixture<UrpgWebCalcLoadPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrpgWebCalcLoadPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrpgWebCalcLoadPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
