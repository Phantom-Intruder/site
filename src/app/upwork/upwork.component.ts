import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upwork',
  templateUrl: './upwork.component.html'
})
export class UpworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href='https://www.upwork.com/freelancers/~0170c47a314ef06a17';
    }, 3000);
  }

}
