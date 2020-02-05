import { Injectable } from '@angular/core';
import { UrpgServerService } from './urpg-server.service';

@Injectable({
  providedIn: 'root'
})
export class UrpgCalculatorService {
  constructor(private urpgServer:UrpgServerService) {
    this.initialize();
  }

  initialize() {

  }
}
