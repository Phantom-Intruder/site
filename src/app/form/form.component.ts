import { Component } from '@angular/core';

import { Class } from '../models/class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  simpleOptions = ["one", "two", "three"]
  model = new Class(18, 'Random String', this.simpleOptions[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }
}