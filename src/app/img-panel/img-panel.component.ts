import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-panel',
  templateUrl: './img-panel.component.html',
  styleUrls: ['./img-panel.component.css']
})
export class ImgPanelComponent implements OnInit {
  @Input()
  activeElem

  get width() {
    return this.activeElem.style['width'].replace('px', '');
  }
  set width(newSize: number) {
    this.activeElem.style['width'] = newSize + 'px';
  }

  get height() {
    return this.activeElem.style['height'].replace('px', '');
  }
  set height(newSize: number) {
    this.activeElem.style['height'] = newSize + 'px';
  }

  constructor() { }

  ngOnInit() {
  }

}
