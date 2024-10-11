import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-vacation-req-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacation-req-card.component.html',
  styleUrl: './vacation-req-card.component.css',

})
export class VacationReqCardComponent {

  @Input() cardDetails: {name : string, submissionDate : string, duration : string, salary : number} = {
    name: '',
    submissionDate: '',
    duration : '',
    salary: 0
  };  



}
