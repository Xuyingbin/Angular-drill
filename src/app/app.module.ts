
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VersionComponent } from './browser/version/version.component';
import { BrandComponent } from './browser/brand/brand.component';
import { BrowserNavComponent } from './browser/browser-nav/browser-nav.component';
import { Code404Component } from './code404/code404.component';
import { BrowserService } from './shared/browser.service';
import { StarComponent } from './star/star.component';
import { BrandDetailComponent } from './browser/brand-detail/brand-detail.component';
import { MenuSearchComponent } from './form/menu-search/menu-search.component';
import { PercentPipe } from './browser/percent.pipe';

let routerConfig: Routes = [
  {path: '', redirectTo: '/browserNav', pathMatch: 'full'},
  {path: 'browserNav', component: BrowserNavComponent, children: [
    {path: '', component: VersionComponent},
    {path: 'version', component: VersionComponent},
    {path: 'brand', component: BrandComponent, children:[
      {path: ':id', component: BrandDetailComponent}
    ]}
  ]},
  {path: '**', component: Code404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    VersionComponent,
    BrandComponent,
    BrowserNavComponent,
    Code404Component,
    StarComponent,
    BrandDetailComponent,
    MenuSearchComponent,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [BrowserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
