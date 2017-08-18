import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formatting-panel',
  templateUrl: './formatting-panel.component.html',
  styleUrls: ['./formatting-panel.component.css']
})
export class FormattingPanelComponent implements OnInit {
  @Input()
  activeElem


  get fontSize() {
    return this.activeElem.style['font-size'].replace('px', '');
  }
  set fontSize(newSize: number) {
    this.activeElem.style['font-size'] = newSize + 'px';
  }

  constructor() {
  }

  ngOnInit() {

  }

}
