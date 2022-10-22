import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudAddComponent } from './stud-add/stud-add.component';
import { StudEditComponent } from './stud-edit/stud-edit.component';
import { StudGetComponent } from './stud-get/stud-get.component';

const routes: Routes = [
  {
    path: "student/create",
    component: StudAddComponent
  },
  {
    path: "student/edit/:id",
    component: StudEditComponent
  },
  {
    path: "student",
    component: StudGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
