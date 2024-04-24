export class Student{
  public studentName: string;
  public studentId: number;
  public studentGender: string;
  public age: number;
  public presentAddress: string;
  public permanentAddress: string;
  public emergencyContact: string;


  constructor(studentName: string,  studentId: number,  studentGender: string, age: number, presentAddress: string, permanentAddress: string, emergencyContact: string) {
    this.studentName = studentName;
    this.studentId = studentId;
    this.studentGender = studentGender;
    this.age = age;
    this.presentAddress = presentAddress;
    this.permanentAddress = permanentAddress;
    this.emergencyContact = emergencyContact;
  }



}
