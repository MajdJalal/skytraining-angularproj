import { Component, OnInit } from '@angular/core';
import { VacationReqCardComponent } from "../vacation-req-card/vacation-req-card.component";
import { CardsDetailsService } from '../services/cards-details.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-vacation-reqs-collection',
  standalone: true,
  imports: [VacationReqCardComponent],
  templateUrl: './vacation-reqs-collection.component.html',
  styleUrl: './vacation-reqs-collection.component.css',
  providers: [CardsDetailsService]
})
export class VacationReqsCollectionComponent implements OnInit{

  id : number = 0;
  start : number = 0;
  end : number = 3;
  cardDetails: any[] = [];

  constructor(private cardsDetailsService: CardsDetailsService, private elementRef: ElementRef) {} 

  ngOnInit(): void {
    this.cardDetails = this.cardsDetailsService.getCardDetails();
  }

  onClickVacationRequestsButton() : void{
    const inputElement = this.elementRef.nativeElement.querySelector('#searchInput');

    if (inputElement) {
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
