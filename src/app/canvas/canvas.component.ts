import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  draggedElem = null;
  focusedElem = null;

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
    const input = document.createElement('input');
    input.onmousedown = (event) => this.mouseDown(event);
    input.ondblclick = (event) => this.doubleClick(event);
    input.onblur = (event) => this.inputBlur(event);
    input.onfocus = (e) => this.onFocus(e);
    input.className = 'draggable';
    input.style.fontSize = '12px';
    input.value = 'Enter text here';
    input.readOnly = true;
    input.onkeypress = (e: any) => {
      e.target.style.width = `calc(${e.target.value.length} * em)`;
    };
    this.canvas.nativeElement.appendChild(input);
  }

  addImg() {
    const img = document.createElement('img');
    img.onmousedown = (event) => this.mouseDown(event);
    img.className = 'draggable';
    img.src = prompt('Enter img url');
    img.draggable = false;
    img.onfocus = (e) => this.onFocus(e);
    this.canvas.nativeElement.appendChild(img);

    img.style.height = img.offsetHeight + 'px';
    img.style.width = img.offsetWidth + 'px';
  }

  onFocus(e) {
    this.focusedElem = e.target;
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

  clickHandler(event) {
    if (event.target !== this.focusedElem) {
      this.focusedElem = event.target;
    }
  }

}
