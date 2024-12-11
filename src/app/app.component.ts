import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  mySnap!: face-snap;
  mySnap2!: face-snap;
  mySnap3!: face-snap;

  ngOnInit(): void {
    this.mySnap = new face-snap(
      "Photo de la mer",
      "Une belle plage",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      new Date(),
      200,
    );
  }
}
