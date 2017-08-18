import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-canvas-settings',
  templateUrl: './canvas-settings.component.html',
  styleUrls: ['./canvas-settings.component.css']
})
export class CanvasSettingsComponent implements OnInit {
  @Input()
  canvasRef

  backgroundImgChange(newVal) {
    this.canvasRef.style['background-image'] = `url(${newVal})`;
    this.canvasRef.style['background-size'] = `cover`;
  }

  constructor() {
  }

  ngOnInit() {

  }

}
