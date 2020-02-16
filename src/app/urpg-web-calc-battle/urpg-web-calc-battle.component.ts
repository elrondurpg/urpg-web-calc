import { Component, Input, OnInit } from '@angular/core';
import { UrpgBattleService } from 'urpg-calculator';
import { Battle } from 'urpg-calculator/dist/classes/Battle';

@Component({
  selector: 'urpg-web-calc-battle',
  templateUrl: './urpg-web-calc-battle.component.html',
  styleUrls: ['./urpg-web-calc-battle.component.css']
})
export class UrpgWebCalcBattleComponent implements OnInit {
  @Input() battle:Battle;

  constructor(private calc:UrpgBattleService) { }

  ngOnInit() {
  }

  print() {
    console.log("print");
    console.log(this.battle);
  }

}
