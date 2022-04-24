import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { CommitFormComponent } from './commit-form/commit-form.component';
import { CommitsComponent } from './commits/commits.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { SiteBodyComponent } from './site-body/site-body.component';
import { BodyTextComponent } from './body-text/body-text.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    CommitFormComponent,
    CommitsComponent,
    SiteBodyComponent,
    BodyTextComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
