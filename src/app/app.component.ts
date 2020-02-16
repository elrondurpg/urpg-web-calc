import { Component, OnInit, Inject } from '@angular/core';
import { Battle } from 'urpg-calculator/dist/classes/Battle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private state:string = 'WELCOME';
  private battle:Battle = new Battle();

  constructor() {

  }

  ngOnInit() {
    
  }

  startBattle() {
    this.state="LOADRULES";
  }

  loadedRules($event) {
    this.state="LOADPOKEMON";
    this.battle = $event;
  }

  loadedPokemon($event) {
    this.state="BATTLE";
    this.battle = $event;
    this.battle.start();
  }

  loadBattle() {
    this.state="LOADBATTLE";
  }

  testBattle() {
    this.state="BATTLE";
  }
}
