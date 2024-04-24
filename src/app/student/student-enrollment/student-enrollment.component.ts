import {Component, OnInit} from '@angular/core';
import {Student} from "../student.model";
import {FormBuilder,  FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { NgForOf} from "@angular/common";
import {UpdateStudentDetailsComponent} from "../update-student-details/update-student-details.component";
import {RouterLink} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Staff} from "../../staff/enrollment-form/enrollment-form.component";


@Component({
  selector: 'app-student-enrollment',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    UpdateStudentDetailsComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './student-enrollment.component.html',
  styleUrl: './student-enrollment.component.css'
})
export class StudentEnrollmentComponent implements OnInit{

  studentList: Student[] = [];
  // studentForm: FormGroup;

  newStudent: Student = {
    studentName: '',
    studentId: 0,
    studentGender: '',
    age: 0,
    presentAddress: '',
    permanentAddress: '',
    emergencyContact: '',
  };
constructor(private fb: FormBuilder) {
}


ngOnInit() {

}


add(){
  // @ts-ignore
  this.studentList.push({studentName: '',studentId: 0,studentGender: '',age: 0,presentAddress: '',permanentAddress: '',emergencyContact: '',...this.newStudent});
  this.resetNewStudent();
}






  onDelete(index: number): void {
    this.studentList.splice(index, 1);
  }


  // onUpdate(index: number): void {
  //   this.newStudent = {...this.studentList[index]};
  //   this.onUpdate(index);
  //   // this.onDelete(index);
  //
  //
  //
  // }





  // @ts-ignore
  // onDelete(students) {
  //   this.studentList.splice(students)
  // }
  //
  //
  //

  onUpdate(index: number): void {
    this.newStudent = {...this.studentList[index]};
    this.onDelete(index);
  }

  resetNewStudent() {
    this.newStudent = {
      studentName: '',
      studentId: 0,
      studentGender: '',
      age: 0,
      presentAddress: '',
      permanentAddress: '',
      emergencyContact: '',

    };

  }
}
