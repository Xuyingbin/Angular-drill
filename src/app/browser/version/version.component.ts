import { BrowserService, BrowserVersion } from './../../shared/browser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  browserVersions: Array<BrowserVersion>;

  constructor(
    private browserService: BrowserService
  ) { }

  ngOnInit() {
    this.browserVersions = this.browserService.getVersions();
  }

}
