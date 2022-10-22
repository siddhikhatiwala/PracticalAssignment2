import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudAddComponent } from './stud-add/stud-add.component';
import { StudGetComponent } from './stud-get/stud-get.component';
import { StudEditComponent } from './stud-edit/stud-edit.component';

import { HttpClientModule } from '@angular/common/http';
import Stud from './stud';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudService } from './stud.service';

@NgModule({
  declarations: [
    AppComponent,
    StudAddComponent,
    StudGetComponent,
    StudEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [StudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
