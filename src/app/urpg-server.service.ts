import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrpgServerService {
  private api = 'https://pokemonurpg.com:8443';
  private pokemonNames:object;

  constructor(private http:HttpClient) {
    this.initialize();
  }

  initialize() {
    this.http.get(this.api + '/pokemon').subscribe(
      (response) => {
        if (response['status'] == 200) {
          this.pokemonNames = response['data'];
        }
      }
    ); 
  }

  getPokemonNames() {
    return this.pokemonNames;
  }
}
