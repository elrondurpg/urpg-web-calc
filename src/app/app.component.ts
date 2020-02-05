import { Component, OnInit } from '@angular/core';
import { UrpgCalculatorService } from './urpg-calculator.service';
import { UrpgServerService } from './urpg-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private pokemonNames:object;

  constructor(
    private calc:UrpgCalculatorService,
    private server:UrpgServerService) {}

  ngOnInit() {
    this.pokemonNames = this.server.getPokemonNames();
  }
}
