import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-student-details',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-student-details.component.html',
  styleUrl: './update-student-details.component.css'
})
export class UpdateStudentDetailsComponent implements OnInit{
 @Input() studentDetails: any;

  updateForm: any;
 submitted = false;
 constructor(private fb: FormBuilder) {
 }
 ngOnInit() {
   this.updateForm = this.fb.group({
     studentName:['', Validators.required],
     studentId:['', Validators.required]
   });
 }

  onSubmit() {
   this.submitted = true;
   if (this.updateForm.invalid){
     return;
   }
   console.log('Form data submitted:', this.updateForm.value);
    // if (this.updateForm.valid){
    //   console.log(this.updateForm.value);
    // }
  }
}
