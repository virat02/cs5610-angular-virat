import { Component, OnInit } from '@angular/core';
import WebsiteService from '../services/WebsiteService';

@Component({
  selector: 'app-website-navigator',
  templateUrl: './website-navigator.component.html',
  styleUrls: ['./website-navigator.component.css']
})
export class WebsiteNavigatorComponent implements OnInit {

  constructor(private websiteService: WebsiteService) { }

  websites;
  selectedWebsite = {
    _id: '',
    pages: []
  };
  selectedPage = {
    _id: '',
    rows: []
  };

  ngOnInit() {
    this.websiteService.findAllWebsites()
      .then(websites => this.websites = websites);
  }

  selectWebsite(website) {
    this.selectedWebsite = website;
  }

  selectPage(page: any) {
    this.selectedPage = page;
  }
}
