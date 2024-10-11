import { Component } from '@angular/core';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderWelcomingComponent } from './header-welcoming/header-welcoming.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderBarComponent, HeaderWelcomingComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    // Subscribe to route changes
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;  // Get the current URL
    });
  }
  
}
