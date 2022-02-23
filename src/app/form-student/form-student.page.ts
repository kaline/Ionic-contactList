import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../../models/student';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.page.html',
  styleUrls: ['./form-student.page.scss'],
})
export class FormStudentPage implements OnInit {

  student = new Student();

  constructor(public studentService: StudentService, public navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
  }
  saveStudent(){
    console.log(this.student);
    this.studentService.insertStudent(this.student).then( _=>{
      this.registerStudentToast();
      this.navCtrl.navigateForward('/list-student');
    });
  }
  async registerStudentToast() {
    const toast = await this.toastController.create({
      message: 'Estudante cadastrado',
      duration: 2000
    });
    toast.present();
  }

}
