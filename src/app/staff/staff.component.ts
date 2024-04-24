import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {EnrollmentFormComponent} from "./enrollment-form/enrollment-form.component";

@Component({
  selector: 'app-staff',
  standalone: true,
    imports: [
        RouterLink,
        EnrollmentFormComponent
    ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {

}
