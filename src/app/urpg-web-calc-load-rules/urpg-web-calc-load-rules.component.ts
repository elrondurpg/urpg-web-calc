import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ConstantsService } from '../constants.service';
import { Team } from 'urpg-calculator/dist/classes/Team';
import { Battle } from 'urpg-calculator/dist/classes/Battle';

@Component({
  selector: 'urpg-web-calc-load-rules',
  templateUrl: './urpg-web-calc-load-rules.component.html',
  styleUrls: ['./urpg-web-calc-load-rules.component.css']
})
export class UrpgWebCalcLoadRulesComponent implements OnInit {
  @Input() battle:Battle;
  private teams:Array<Team>;

  constructor(private contstants:ConstantsService) { }

  ngOnInit() {
    console.log("Loading rules for battle:");
    console.log(this.battle);
    /*if (this.contstants.debug) {
      this.battleType = "Singles";
      this.teamType = "Open";
      this.pokemonPerTrainer = 3;
      this.chooseBattleType();
      let trainers1 = [{
        name: "Elrond"
      }];
      let trainers2 = [{
        name: "Xali"
      }];
      this.teams = new Array();
      this.teams.push({ trainers: trainers1 });
      this.teams.push({ trainers: trainers2 });
    }*/
  }

  @Output() loadedRules = new EventEmitter();
  onLoadedRules() {
    this.loadedRules.emit(this.battle);
  }

  getBattleTypes() {
    return Battle.battleTypes;
  }

  getTeamTypes() {
    return Battle.teamTypes;
  }

  getValidNumsPokemonPerTrainer() {
    return Battle.validNumPokemonPerTrainer;
  }

}
