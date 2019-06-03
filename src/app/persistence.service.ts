import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  public numberArray:Array<number> = [];

  constructor() { 

  }

  pushNumber(numberToPush:number){
    this.numberArray.push(numberToPush);
  }
}
