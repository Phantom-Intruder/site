import { Component } from '@angular/core';

import { Commit } from '../models/commit';
import { CommitFormService } from './commit-form.service';

@Component({
  selector: 'app-commit-form',
  templateUrl: './commit-form.component.html',
  styleUrls: ['./commit-form.component.css'],
  providers: [CommitFormService]
})
export class CommitFormComponent {
  model = new Commit('Random String');
  submitted = false;

  constructor(private commitFormService: CommitFormService) {}
  
  onSubmit(model: { commitText: string; }) { 
    this.submitted = true;
    const newCommit = new Commit(model.commitText);
    this.commitFormService
      .addCommit(newCommit)
      .subscribe();
  }
}