import { Component, Input, OnInit } from '@angular/core';
import { UrpgBattleService } from 'urpg-calculator';
import { Battle } from 'urpg-calculator/dist/classes/Battle';
import { Trainer } from 'urpg-calculator/dist/classes/Trainer';

@Component({
  selector: 'urpg-web-calc-battle',
  templateUrl: './urpg-web-calc-battle.component.html',
  styleUrls: ['./urpg-web-calc-battle.component.css']
})
export class UrpgWebCalcBattleComponent implements OnInit {
  @Input() battle:Battle;

  constructor(private calc:UrpgBattleService) { }

  ngOnInit() {
    this.battle.start();
  }

  execute() {
    this.battle.execute();
  }

}
