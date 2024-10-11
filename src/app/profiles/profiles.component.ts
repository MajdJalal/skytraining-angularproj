import { Component } from '@angular/core';
import { HeaderBarComponent } from "../header-bar/header-bar.component";
import { EmpDetailsTwoComponent } from "../emp-details-two/emp-details-two.component";
import { HistoryComponent } from "../history/history.component";
import { PendingReqsComponent } from '../pending-reqs/pending-reqs.component';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [HeaderBarComponent, EmpDetailsTwoComponent, HistoryComponent, PendingReqsComponent],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent {

}
