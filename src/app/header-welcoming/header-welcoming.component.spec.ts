import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWelcomingComponent } from './header-welcoming.component';

describe('HeaderWelcomingComponent', () => {
  let component: HeaderWelcomingComponent;
  let fixture: ComponentFixture<HeaderWelcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWelcomingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderWelcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
