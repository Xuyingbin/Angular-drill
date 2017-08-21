import { Injectable } from '@angular/core';
import 'rxjs/operator/filter.js';

@Injectable()
export class BrowserService {

  private browserVersions: Array<BrowserVersion> = [
    new BrowserVersion(1,'Chrome',5,0.421),
    new BrowserVersion(2,'IE9.0',2,0.1075),
    new BrowserVersion(3,'IE8.0',2,0.0998),
    new BrowserVersion(4,'QQ',3,0.0654),
    new BrowserVersion(5,'2345',2,0.0521),
    new BrowserVersion(6,'搜狗高速',3,0.0454),
    new BrowserVersion(7,'IE7.0',2,0.0316),
    new BrowserVersion(8,'Firefox',4,0.0203),
    new BrowserVersion(9,'IE10.0',2,0.0172),
    new BrowserVersion(10,'其他',2,0.01396)
  ];

  private browserBrands: Array<BrowserBrand> = [
    new BrowserBrand(1,'Chrome',5,0.421,'WebKit、Blink','Google Chrome是一款由Google公司开发的网页浏览器，该浏览器基于其他开源软件撰写，包括WebKit，目标是提升稳定性、速度和安全性，并创造出简单且有效率的使用者界面。软件的名称是来自于称作Chrome的网络浏览器GUI（图形使用者界面）。软件的beta测试版本在2008年9月2日发布，提供50种语言版本，有Windows、OS X、Linux、Android、以及iOS版本提供下载。[1]  谷歌将在谷歌浏览器Chrome上推出“小程序”增强型网页应用（ Progressive Web Apps，简称 PWAs），是目前正处于测试版的Chrome 57新增的功能。'),
    new BrowserBrand(2,'IE',2,0.2562,'Trident','Internet Explorer，是微软公司推出的一款网页浏览器。原称Microsoft Internet Explorer(6版本以前)和Windows Internet Explorer(7、8、9、10、11版本)，简称IE。在IE7以前，中文直译为“网络探路者”，但在IE7以后官方便直接俗称"IE浏览器"。2015年3月微软确认将放弃IE品牌。转而在windows 10上，Microsoft Edge取代了。微软于2015年10月宣布2016年1月起停止支持老版本IE浏览器。[1] 2016年1月12日，微软公司宣布于这一天停止对IE 8/9/10三个版本的技术支持，用户将不会再收到任何来自微软官方的IE安全更新；作为替代方案，微软建议用户升级到IE 11或者改用Microsoft Edge浏览器。'),
    new BrowserBrand(3,'QQ',3,0.0654,'最新Chrome+最强IE','QQ浏览器是Tencent Technology (Shenzhen) Company Limited开发的一款浏览器，采Chrome Tab 高速组件+自带IE高级内核，让浏览快速稳定，拒绝卡顿，完美支持HTML5和各种新的Web标准。QQ浏览器是受人重视的产品之一，QQ浏览器7，采用单核模式，集超小安装包和超强稳定性于一身，访问网页速度也得到进一步优化。'),
    new BrowserBrand(4,'2345',2,0.0521,'Chromium47','2345王牌浏览器（2345Explorer）作为2345网址导航首要入口诞生于2010年12月，是上海二三四五网络科技有限公司主推的重要产品之一。新一代2345王牌浏览器采用Chromium和IE双内核，主打极速与安全特性。基于Chromium深度定制，引入网页智能预加载技术，访问网页更快速，其双内核引擎可智能切换，匹配不同网页，极速浏览的同时也确保兼容性。全新打造云安全中心，为千万用户保驾护航。'),
    new BrowserBrand(5,'搜狗高速',3,0.0454,'Chromium','搜狗高速浏览器  由搜狗公司开发，基于谷歌chromium内核，力求为用户提供跨终端无缝使用体验，让上网更简单、网页阅读更流畅的浏览器。搜狗高速浏览器首创“网页关注”功能，将网站内容以订阅的方式提供给用户浏览。搜狗手机浏览器还具有WIFI预加载、收藏同步、夜间模式、无痕浏览、自定义炫彩皮肤、手势操作等众多易用功能。'),   
    new BrowserBrand(6,'Firefox',4,0.0203,'Gecko','Mozilla Firefox，中文俗称“火狐”（正式缩写为Fx或fx，非正式缩写为FF），是一个自由及开放源代码网页浏览器，使用Gecko排版引擎，支持多种操作系统，如Windows、Mac OS X及GNU/Linux等。该浏览器提供了两种版本，普通版和ESR（Extended Support Release，延长支持）版，ESR版本是 Mozilla 专门为那些无法或不愿每隔六周就升级一次的企业打造。Firefox ESR 版的升级周期为 42 周，而普通 Firefox 的升级周期为 6 周。'),    
    new BrowserBrand(7,'其他',2,0.1396,'大多内核为WebKit','Opera,Safari等各种浏览器')
  ];



  constructor() { }

  getVersions(): Array<BrowserVersion>{
    return this.browserVersions;
  }
  getBrands(): Array<BrowserBrand>{
    return this.browserBrands;
  }

  getDetail(brandId:number): BrowserBrand{
    var browserBrand = this.browserBrands.find(brand => brand.id==brandId);

    if(!browserBrand){
      browserBrand = new BrowserBrand(0,'',0,0,'','');
    }

    return browserBrand;
    
  }
}


export class BrowserVersion{
  constructor(
    public id: number,
    public name: string,
    
    public rating: number,
    public percent: number
  ){

  }
}

export class BrowserBrand{
  constructor(
    public id: number,
    public name: string,
    public rating: number,
    public percent: number,
    public kernel:string,    
    public detail: string
  ){

  }
}