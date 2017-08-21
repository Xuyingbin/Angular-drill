import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { BrowserService, BrowserBrand } from '../../shared/browser.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  browserBrands: Array<BrowserBrand>;

  constructor(
    private browserService: BrowserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.browserBrands = this.browserService.getBrands();
    
  }

  navDetail(brand: BrowserBrand){
    this.router.navigate(['/browserNav/brand/',brand.id]);
  }
}
