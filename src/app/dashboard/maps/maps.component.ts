import { Component, OnInit } from '@angular/core';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `]
})
export class MapsComponent implements OnInit {
  title: string = 'Google Map';
  lat: number = 12.9359;
  lng: number = 77.6961;
  constructor() { }

  ngOnInit() {
  }
  // google maps zoom level
  zoom: number = 8;

  
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
   
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

