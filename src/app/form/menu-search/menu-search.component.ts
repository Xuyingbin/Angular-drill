import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() { 
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe( val => {console.log(val)});
  }

  ngOnInit() {
  }

}
