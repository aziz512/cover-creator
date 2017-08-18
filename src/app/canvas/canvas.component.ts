import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;

  draggedElem = null;

  mouseDown(event) {
    if (event.target !== document.activeElement || event.target.readOnly) {
      this.draggedElem = event.target;
    }
  }

  mouseUp(event) {
    this.draggedElem = null;
  }

  mouseMove(event) {
    if (this.draggedElem) {
      this.draggedElem.style.left = (event.clientX - (0.5 * this.draggedElem.offsetWidth)) + 'px';
      this.draggedElem.style.top = (event.clientY - (0.5 * this.draggedElem.offsetHeight)) + 'px';
    }
  }

  add() {
    let input = document.createElement('input');
    input.onmousedown = (event) => this.mouseDown(event);
    input.ondblclick = (event) => this.doubleClick(event);
    input.onblur = (event) => this.inputBlur(event);
    input.style.top = '200px';
    input.style.left = '0';
    input.style.position = 'absolute';
    input.value = 'Enter text here';
    input.readOnly = true;
    this.canvas.nativeElement.appendChild(input);
  }

  doubleClick(event) {
    event.target.readOnly = false;
    event.target.focus();
  }

  inputBlur(event) {
    event.target.readOnly = true;
  }

  ngOnInit() {
  }

}
