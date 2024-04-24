import {RouterModule, Routes} from '@angular/router';
import { StaffComponent} from "./staff/staff.component";
import {StudentComponent} from "./student/student.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentEnrollmentComponent} from "./student/student-enrollment/student-enrollment.component";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {UpdateStudentDetailsComponent} from "./student/update-student-details/update-student-details.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {EnrollmentFormComponent} from "./staff/enrollment-form/enrollment-form.component";


export const routes: Routes = [
  // {path: 'dashboard', component: DashboardComponent},
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'student', component: StudentComponent },
  {path: 'student-enrollment', component: StudentEnrollmentComponent},
  {path: 'update-student-details', component: UpdateStudentDetailsComponent},
  {path: 'enrollment-form', component: EnrollmentFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ReactiveFormsModule],
  exports: [RouterModule]
})

export class AppRoutingModule{}
