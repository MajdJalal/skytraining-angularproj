import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  start : number = 0;
  end : number = 9;
  @Output() newItemEvent = new EventEmitter<number[]>();

  buttons : boolean[] = [false, false, false];

  constructor(private elementRef: ElementRef) {}

  displayCards(factor : number) : void{
    //reset all , and keep the clicked to be styled(colored)
    this.buttons = [false, false, false];
    this.buttons[factor - 1] = true;

    this.end = 9 * factor;
    this.start = this.end - 9;
    console.log(this.start + "" + this.end);

    this.newItemEvent.emit([this.start, this.end]);
  }



}
