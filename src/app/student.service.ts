import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url =
    'http://su-angular.ddns.net/api/su-angular';
  constructor(private _http: HttpClient) {}
  getGrades(): Observable<Opt[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('topic', 'grade')
      .set('func', 'get_all');


    const options = { headers, 'observe?': 'body', params };

    return this._http.get<Opt[]>(this.url, options);

    // return of([
    //   { Value: 1, Name: 'Class1' },
    //   { Value: 2, Name: 'Class2' },
    //   { Value: 3, Name: 'Class3' },
    //   { Value: 4, Name: 'Class4' },
    //   { Value: 5, Name: 'Class5' }
    // ]);
  }
  getRoombyGrade(grade_ref: number): Observable<Opt[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('topic', 'room')
      .set('func', 'get_by_grade')
      .set('grade_ref', grade_ref);


    const options = { headers, 'observe?': 'body', params };

    return this._http.get<Opt[]>(this.url, options);
  }
  getStudentdata(grade_ref: number): Observable<Student[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('topic', 'student')
      .set('func', 'get_by_room')
      .set('room_ref', grade_ref);


    const options = { headers, 'observe?': 'body', params };

    return this._http.get<Student[]>(this.url, options);
  }
}
  

export interface Opt {
  Value: number;
  Name: string;
}
export interface Student {
  Ref: number,
  GradeRef: number,
  GradeName: string,
  RoomRef: number,
  RoomName: string,
  No: number,
  Code: string,
  FirstName: string,
  LastName: string,
  Title: number,
  IdCard: string,
  StatusID: number,
  StatusName: string,
}
export const statusName: Map<number, string> = new Map<number, string>()
statusName.set(0,"ยังไม่ได้เช็ค")
statusName.set(1,"มาเรียน")
statusName.set(2,"ขาดเรียน")
statusName.set(3,"ลากิจ")
statusName.set(4,"ลาป่วย")


