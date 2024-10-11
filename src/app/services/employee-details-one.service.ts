import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsOneService {

  employeeDetails : {} = {
    'employeeName' : "Majd Alkhawajaa",
    'employeeTitle' : "software engineer",
    'employeeReporter': "Wedyan",
    'corporateLvl' : "10",
  }


  getEmployees(): {} {
    return this.employeeDetails;
  }


}
