import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-spahome',
  templateUrl: './spahome.component.html',
  styleUrls: ['./spahome.component.css']
})
export class SpahomeComponent implements OnInit {

  count = 0;

  constructor() {

  }

  ngOnInit() {
    let interval = setInterval(() => { 
      this.count++;
      if (this.count === 20) {
        clearInterval(interval);
      }
    }, 1000)
  }
}
