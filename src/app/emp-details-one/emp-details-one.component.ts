import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsOneService } from '../services/employee-details-one.service';

@Component({
  selector: 'app-emp-details-one',
  standalone: true,
  imports: [],
  templateUrl: './emp-details-one.component.html',
  styleUrl: './emp-details-one.component.css',
  providers: [EmployeeDetailsOneService]
})
export class EmpDetailsOneComponent implements OnInit {
  employeeDetails: any = {};

  constructor(private employeeService: EmployeeDetailsOneService) {} 

  employeeName : string = ""; 
  employeeTitle : string = "";
  employeeReporter : string = "";
  corporateLvl : string = "";

  ngOnInit(): void {
    this.employeeDetails = this.employeeService.getEmployees(); // Call a method from the service to get the emplyee details
    //assign the returned values to the local vars
    this.employeeName = this.employeeDetails.employeeName;
    this.employeeTitle = this.employeeDetails.employeeTitle;
    this.employeeReporter = this.employeeDetails.employeeReporter;
    this.corporateLvl = this.employeeDetails.corporateLvl;
  }
  
}
