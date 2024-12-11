import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent {
  @Input() facesnap!: FaceSnapComponent;


  snapButtonText!: string;
  userHasSnapped!: boolean;
  removeSnaps: any;
  addSnaps: any;


  ngOnInit(): void {

    this.snapButtonText = " oh Snap !";
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();

    } else {
      this.snap();

    }
  }
  unSnap(): void {
    this.facesnap.removeSnaps;
    this.snapButtonText = "Oh Snap !";
    this.userHasSnapped = false;
  }
  snap(): void {
    this.facesnap.addSnaps
    this.snapButtonText = "Undo Snap !";
    this.userHasSnapped = true;
  }
}
