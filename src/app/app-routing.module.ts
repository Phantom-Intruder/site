import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitFormComponent } from './commit-form/commit-form.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { StackoverflowComponent } from './stackoverflow/stackoverflow.component';
import { UpworkComponent } from './upwork/upwork.component';

const routes: Routes = [
  { path: '', component: CommitFormComponent },
  { path: 'li', component: LinkedinComponent },
  { path: 'so', component: StackoverflowComponent },
  { path: 'uw', component: UpworkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
