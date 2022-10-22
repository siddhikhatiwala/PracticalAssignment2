import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudService } from '../stud.service';
@Component({
  selector: 'app-stud-add',
  templateUrl: './stud-add.component.html',
  styleUrls: ['./stud-add.component.css']
})
export class StudAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router,private ss: StudService) 
  {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      sem: ['', Validators.required],
      age: ['', Validators.required ]
    });
  }
insertStud()
{
  this.ss.addStud(this.angForm.value.name,this.angForm.value.email,this.angForm.value.sem,this.angForm.value.age);
    this.router.navigate(['/student']);
}
  ngOnInit(): void {
  }

}
