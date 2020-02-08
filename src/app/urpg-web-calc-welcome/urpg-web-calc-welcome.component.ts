import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'urpg-web-calc-welcome',
  templateUrl: './urpg-web-calc-welcome.component.html',
  styleUrls: ['./urpg-web-calc-welcome.component.css']
})
export class UrpgWebCalcWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() startBattle = new EventEmitter();
  onStartBattle(data) {
    this.startBattle.emit(data);
  }

  @Output() loadBattle = new EventEmitter();
  onLoadBattle(data) {
    this.loadBattle.emit(data);
  }

  @Output() testBattle = new EventEmitter();
  onTestBattle(data) {
    this.testBattle.emit(data);
  }
}
