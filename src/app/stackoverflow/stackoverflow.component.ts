import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html'
})
export class StackoverflowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      window.location.href='https://www.stackoverflow.com/users/3730626/m-b';
    }, 3000);
  }

}
