import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})
export class ListStudentPage implements OnInit {
  students = [];

  constructor(public location:  Location, public studentService: StudentService) {
    this.studentService.listStudents().subscribe(studentsData => {
      console.log(studentsData);
      this.students = studentsData;

    });
  }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
