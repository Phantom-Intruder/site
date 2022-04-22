import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html'
})
export class LinkedinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href='https://www.linkedin.com/in/mewantha-bandara/';
    }, 3000);
  }
}
