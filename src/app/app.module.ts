import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UrpgClient } from 'urpg.js';
import { UrpgBattleService } from 'urpg-calculator';
import { UrpgWebCalcWelcomeComponent } from './urpg-web-calc-welcome/urpg-web-calc-welcome.component';
import { UrpgWebCalcLoadRulesComponent } from './urpg-web-calc-load-rules/urpg-web-calc-load-rules.component';
import { UrpgWebCalcLoadPokemonComponent } from './urpg-web-calc-load-pokemon/urpg-web-calc-load-pokemon.component';
import { UrpgWebCalcBattleComponent } from './urpg-web-calc-battle/urpg-web-calc-battle.component';
import { UrpgWebCalcLoadBattleComponent } from './urpg-web-calc-load-battle/urpg-web-calc-load-battle.component';
import { ConstantsService } from './constants.service';

const server = new UrpgClient(undefined);

@NgModule({
  declarations: [
    AppComponent,
    UrpgWebCalcWelcomeComponent,
    UrpgWebCalcLoadRulesComponent,
    UrpgWebCalcLoadPokemonComponent,
    UrpgWebCalcBattleComponent,
    UrpgWebCalcLoadBattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: UrpgClient, 
      useValue: server
    },
    UrpgBattleService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
