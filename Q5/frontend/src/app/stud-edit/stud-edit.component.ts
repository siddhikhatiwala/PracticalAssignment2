import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudService } from '../stud.service';

@Component({
  selector: 'app-stud-edit',
  templateUrl: './stud-edit.component.html',
  styleUrls: ['./stud-edit.component.css']
})
export class StudEditComponent implements OnInit {

  stud: any = {};
  angForm: FormGroup;

 constructor(private route: ActivatedRoute,
    private router: Router,
    private ss: StudService,
    private fb: FormBuilder) {
  this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      sem: ['', Validators.required ],
      age: ['', Validators.required ]
    });
 }

ngOnInit() :void{
  //first get querystring parameter using this.route.params.subscribe(params=>{})
  this.route.params.subscribe(params => {
      this.ss.editStud(params['id']).subscribe(res => {
        this.stud = res;
    });
  });
}

  updateStud() {
    this.ss.updateStud(this.stud._id,this.angForm.value.name, this.angForm.value.email, this.angForm.value.sem, this.angForm.value.age);
    this.router.navigate(['student']);
  }

}
