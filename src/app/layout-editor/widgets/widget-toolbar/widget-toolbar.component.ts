import {Component, Input, OnInit} from '@angular/core';
import Model from '../../../models/Model';
import PageService from '../../../services/PageService';

@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html',
  styleUrls: ['./widget-toolbar.component.css']
})
export class WidgetToolbarComponent implements OnInit {
  hideWidgetToolbar = true;
  @Input() row;
  @Input() col;
  @Input() widget;
  @Input() websiteId;
  @Input() pageId;
  @Input() page;

  constructor(private model: Model, private pageService: PageService) {
  }

  ngOnInit() {
  }

  deleteWidget() {
    this.model.deleteWidget(this.row, this.col, this.widget);
    this.pageService.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveWidgetUp() {
    this.model.moveWidgetUp(this.row, this.col, this.widget);
    this.pageService.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveWidgetDown() {
    this.model.moveWidgetDown(this.row, this.col, this.widget);
    this.pageService.updatePage(this.websiteId, this.pageId, this.page);
  }

  moveWidgetLeft() {

  }

  moveWidgetRight() {

  }

  changeVal = value => {
    this.widget.type = value;
    this.pageService.updatePage(this.websiteId, this.pageId, this.page);
  }
}
