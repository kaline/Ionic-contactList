import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.page.html',
  styleUrls: ['./form-student.page.scss'],
})
export class FormStudentPage implements OnInit {

  student = {
    name:'',
    email:'',
    registerNumber: '',
    number: '',
    city: '',
  };
  constructor(public studentService: StudentService) { }

  ngOnInit() {
  }
  saveStudent(){
    console.log(this.student);
    this.studentService.insertStudent(this.student);
  }

}
