import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ConstantsService } from '../constants.service';
import { Battle } from 'urpg-calculator/dist/classes/Battle';
import { UrpgCalculator } from 'urpg-calculator';

@Component({
  selector: 'urpg-web-calc-load-pokemon',
  templateUrl: './urpg-web-calc-load-pokemon.component.html',
  styleUrls: ['./urpg-web-calc-load-pokemon.component.css']
})
export class UrpgWebCalcLoadPokemonComponent implements OnInit {
  @Input() battle:Battle;
  pokemonNames:object;

  constructor(
    private constants:ConstantsService,
    private calc:UrpgCalculator) { }

  ngOnInit() {
  }

  @Output() loadedPokemon = new EventEmitter();
  onLoadedPokemon() {
    this.loadedPokemon.emit(this.battle);
  }

}
