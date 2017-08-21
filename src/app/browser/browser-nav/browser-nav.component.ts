import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-browser-nav',
  templateUrl: './browser-nav.component.html',
  styleUrls: ['./browser-nav.component.css']
})
export class BrowserNavComponent implements OnInit {

  menus: Array<BrowserMenu>;

  menuId: number = 1;

  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.menus = [
      new BrowserMenu(1,"版本",'/browserNav/version'),
      new BrowserMenu(2,"品牌",'/browserNav/brand'),
    ];


  }

  nav(menu: BrowserMenu){
    this.router.navigate([menu.link]);
    this.menuId = menu.id;
  }

}

export class BrowserMenu{
  constructor(
    public id: number,
    public name: string,
    public link: string
  ){

  }
}