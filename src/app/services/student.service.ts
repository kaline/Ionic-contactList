import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  listStudents(){
    return this.angularFireDatabase.list('/students').valueChanges();

  }
  insertStudent(){

  }
  updateStudent() {

  }
  removeStudent(){}

}
