import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../../models/student';
import { NavController, NavParams, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.page.html',
  styleUrls: ['./form-student.page.scss'],
})
export class FormStudentPage implements OnInit {

  studentID = undefined;
  student = new Student();
  public navParams = new NavParams();
  title= 'Formulário Estudante';

  constructor(public studentService: StudentService, public navCtrl: NavController,
    public toastController: ToastController) {
      const studentID = this.navParams.get('obj.itemID');
      const student = this.navParams.get('item1');

      console.log(studentID);
      console.log(student);

      if(studentID !== undefined){
        this.student = student;
        this.studentID = studentID;

        this.title='Atualizar estudante';
      }else{
        this.studentID = undefined;
        this.student = new Student();
        this.title='Criar estudante';

      }
    }

  ngOnInit() {
  }
  saveStudent(){
    console.log(this.student);

    if(this.student){
      this.studentService.updateStudent(this.studentID, this.student).then(_=>{
        this.editStudentToast();
      });
    }else {
      this.studentService.insertStudent(this.student).then(_ => {
        this.registerStudentToast();
        this.navCtrl.navigateBack('/list-student');
      });
    }
  }
  async registerStudentToast() {
    const toast = await this.toastController.create({
      message: 'Estudante cadastrado',
      duration: 2000
    });
    toast.present();
  }

  async editStudentToast() {
    const toast = await this.toastController.create({
      message: 'Estudante atualizado',
      duration: 2000
    });
    toast.present();
  }

}
