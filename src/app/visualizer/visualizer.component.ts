import { Component, OnInit } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  constructor(public persistenceService:PersistenceService) {

  }

  ngOnInit() {
  }

}
