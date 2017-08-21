import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()
  rating: number;

  stars: Array<boolean>;

  constructor() { }


  ngOnInit() {
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(this.rating < i);
    }
  }

}
