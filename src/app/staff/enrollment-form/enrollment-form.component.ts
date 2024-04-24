import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

export class Staff{
  public staffName: string;
  public staffEnrollNo: number;
  public staffContact: number;
  public staffPosition: string;
  public email: string;


  constructor(staffName: string, staffEnrollNo: number, staffContact: number, staffPosition: string, email: string) {
    this.staffName = staffName;
    this.staffEnrollNo = staffEnrollNo;
    this.staffContact = staffContact;
    this.staffPosition = staffPosition;
    this.email = email;
  }
}

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent implements  OnInit{
  staffList: Staff[] = [];
  newStaff: Staff = {
    staffName: '',
    staffEnrollNo: 0,
    staffContact: 0,
    staffPosition: '',
    email: '',
  };

  Add() {
    this.staffList.push({...this.newStaff});
    this.resetNewStaff();
  }

  resetNewStaff(){
    this.newStaff = {
      staffName: '',
      staffEnrollNo: 0,
      staffContact: 0,
      staffPosition: '',
      email: '',

    }
  }

  onDelete(index: number): void {
    this.staffList.splice(index, 1);
  }

  onUpdate(index: number): void {
    this.newStaff = {...this.staffList[index]};
    this.onDelete(index);



  }
  constructor() {
  }

  ngOnInit() {
  }
}
