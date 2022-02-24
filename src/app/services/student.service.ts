import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  listStudents(){
    return this.angularFireDatabase.list('/students').snapshotChanges()
    .pipe(map(item => item.map(changes =>({key: changes.payload.key, value: changes.payload.val()}))));

  }
  insertStudent(student){
    return this.angularFireDatabase.list('/students').push(student);

  }
  updateStudent(id, student) {
    return this.angularFireDatabase.object('/students/' + id).update(student);


  }
  removeStudent(id){
    return this.angularFireDatabase.object('/students/' + id).remove();
  }

}
