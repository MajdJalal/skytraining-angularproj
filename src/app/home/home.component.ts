import { Component } from '@angular/core';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { HeaderWelcomingComponent } from '../header-welcoming/header-welcoming.component';
import { VacationLeaveCountsComponent } from '../vacation-leave-counts/vacation-leave-counts.component';
import { EmpDetailsOneComponent } from "../emp-details-one/emp-details-one.component";
import { VacationReqCardComponent } from "../vacation-req-card/vacation-req-card.component";
import { VacationReqsCollectionComponent } from "../vacation-reqs-collection/vacation-reqs-collection.component";
import { NewsComponent } from "../news/news.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderBarComponent, HeaderWelcomingComponent, VacationLeaveCountsComponent, EmpDetailsOneComponent, EmpDetailsOneComponent, VacationReqCardComponent, VacationReqsCollectionComponent, NewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
