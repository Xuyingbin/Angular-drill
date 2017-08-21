import { BrowserService } from './../../shared/browser.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BrowserBrand } from '../../shared/browser.service';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  browserBrand: BrowserBrand;

  private brandId:number;

  constructor(
    private routerInfo: ActivatedRoute,
    private browserService: BrowserService
  ) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.brandId = params["id"];
      this.browserBrand = this.browserService.getDetail(this.brandId);
    });
    
  }

}
