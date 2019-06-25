import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() row;
  @Input() column;
  @Input() widget;
  @Input() websiteId;
  @Input() pageId;
  @Input() page;

  constructor() { }

  ngOnInit() {
  }

}
