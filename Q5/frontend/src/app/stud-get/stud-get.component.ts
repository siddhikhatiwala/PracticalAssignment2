import { Component, OnInit } from '@angular/core';
import Stud from '../stud';
import { StudService } from '../stud.service';

@Component({
  selector: 'app-stud-get',
  templateUrl: './stud-get.component.html',
  styleUrls: ['./stud-get.component.css']
})
export class StudGetComponent implements OnInit {

  studs: Stud[]=[];
  constructor(private ss: StudService) { }

  ngOnInit() {
    this.ss
      .getStud()
      .subscribe((data: Stud[]) => {
        this.studs = data;
    });
  }

  deleteStud(id :any) {
    this.ss.deleteStud(id).subscribe(res => {
      //console.log('Deleted');
      this.ngOnInit(); 
    });
  }

}
