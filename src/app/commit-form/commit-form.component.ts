import { Component } from '@angular/core';

import { Commit } from '../models/commit';

@Component({
  selector: 'app-commit-form',
  templateUrl: './commit-form.component.html',
  styleUrls: ['./commit-form.component.css']
})
export class CommitFormComponent {
  model = new Commit('Random String');
  submitted = false;
  onSubmit() { this.submitted = true; }
}
