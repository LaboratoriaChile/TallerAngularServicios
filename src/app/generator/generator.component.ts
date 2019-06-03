import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  constructor(public persistenceService:PersistenceService) { }

  ngOnInit() {
  }

  generateNumber(){
    this.persistenceService.pushNumber(Math.random()*100);
  }

}
