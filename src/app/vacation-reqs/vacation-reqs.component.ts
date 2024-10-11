import { Component, OnInit } from '@angular/core';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { VacationReqCardComponent } from "../vacation-req-card/vacation-req-card.component";
import { CardsDetailsService } from '../services/cards-details.service';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: 'app-vacation-reqs',
  standalone: true,
  imports: [HeaderBarComponent, VacationReqCardComponent, CommonModule, PaginationComponent],
  templateUrl: './vacation-reqs.component.html',
  styleUrl: './vacation-reqs.component.css',
  providers: [CardsDetailsService]
})
export class VacationReqsComponent implements OnInit {

  id : number = 0;
  start : number = 0;
  end : number = 9;

  cardDetails: any[] = [{}];

  constructor(private cardsDetailsService: CardsDetailsService, private elementRef: ElementRef) {} 

  ngOnInit(): void {
    this.cardDetails = this.cardsDetailsService.getCardDetails();
  }

  toggleSelectAll() : void {
    console.log("majd");
    const elements = this.elementRef.nativeElement.querySelectorAll('.card');
    this.cardDetails.forEach((card) => {
      card.selected = true;
    });
    elements.forEach((element: HTMLElement) => {
      console.log(element);
      if(element.style.border == '') {
        element.style.border = '3px solid';
      }
      else element.style.border = ''; 
    });

  }

  addItem(event : number[]) : void {
    this.start = event[0];
    this.end = event[1];

  }

  //for search
  onClickVacationRequestsButton() : void {
    const inputElement = this.elementRef.nativeElement.querySelector('#searchInput');

    if (inputElement && inputElement.value != '') {
      const inputValue = inputElement.value; // Access the value of the input
      console.log(inputValue); // Log the value to the console
      this.id  = Number(inputValue);
      this.start = this.id;
      console.log(this.id); // Log the value to the console
      this.end = this.id + 1;
      console.log(this.end);
    } else {
      console.log('Input element not found');
    }

  }

}
