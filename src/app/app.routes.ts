import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { VacationReqCardComponent } from './vacation-req-card/vacation-req-card.component';
import { VacationReqsComponent } from './vacation-reqs/vacation-reqs.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profiles', component: ProfilesComponent},
    {path: 'vacation-requests', component: VacationReqsComponent}
];
