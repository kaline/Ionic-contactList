import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentService } from '../services/student.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})
export class ListStudentPage implements OnInit {
  students = [];

  constructor(public location:  Location, public studentService: StudentService, public navCtrl: NavController) {
    this.studentService.listStudents().subscribe(studentsData => {
      console.log(studentsData);
      this.students = studentsData;

    });
  }

  ngOnInit() {
  }

  openForm(){
    this.navCtrl.navigateBack('/form-student');
  }
  editStudent(item){
    const studentID = item.key;
    const student = item.value;

    const obj = {
     itemID: studentID,
     item1: student,
    };
    this.navCtrl.navigateForward('/form-student', obj.itemID);



  }

  myBackButton(){
    this.location.back();
  }

}
