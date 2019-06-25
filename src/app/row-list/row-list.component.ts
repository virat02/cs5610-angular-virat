import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.css']
})
export class RowListComponent implements OnInit {

  @Input() rows = [];

  constructor() { }

  ngOnInit() {
  }

}
