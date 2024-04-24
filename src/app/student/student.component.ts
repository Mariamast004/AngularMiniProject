import { Component } from '@angular/core';
import {StudentEnrollmentComponent} from "./student-enrollment/student-enrollment.component";
import {RouterLink} from "@angular/router";
import {UpdateStudentDetailsComponent} from "./update-student-details/update-student-details.component";
import {DisplayStudentsComponent} from "./display-students/display-students.component";

@Component({
  selector: 'app-student',
  standalone: true,
    imports: [
        StudentEnrollmentComponent,
        UpdateStudentDetailsComponent,
        RouterLink,
        DisplayStudentsComponent,
    ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
