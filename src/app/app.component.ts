import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentEnrollmentComponent} from "./student/student-enrollment/student-enrollment.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentComponent} from "./student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, StudentEnrollmentComponent, DashboardComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
