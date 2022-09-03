import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { StudentService, Opt, Student,statusName} from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  public grade: number = 1;
  public grades: number[] = [1, 2, 3, 4, 5];
  public opts: Opt[] = [];
  public rooms: Opt[] =[];
  public room_ref: number = 0;
  public students: Student[] = []
  constructor(private _studentServ: StudentService) {}

  ngOnInit(): void {
    this._studentServ.getGrades().subscribe((data) => {
    this.opts = data;
    });
    this.gradeChange();
  }
  gradeChange(): void {
   this._studentServ.getRoombyGrade(this.grade).subscribe((data) => {
    this.rooms = data;
    })
  }
  roomChange(): void {
    this._studentServ.getStudentdata(this.grade).subscribe((data) => {
     this.students = data;
     
     })
   }
   updateCheckIn(ref: number, statusID: number) {
    for(let student of this.students) {
      if(student.Ref === ref) {
        student.StatusID = statusID
        student.StatusName = statusName.get(statusID)!
      }
    }
  }

   
}
