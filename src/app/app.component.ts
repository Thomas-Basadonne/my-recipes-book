import { Component, OnInit } from '@angular/core';
import { features } from 'node:process';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-recipes-book';

  constructor(private authService: AuthService){};
  ngOnInit(): void {
    this.authService.autoLoging()
  }
}
