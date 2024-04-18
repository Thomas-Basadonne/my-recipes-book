import { Component, OnInit } from '@angular/core';
import { features } from 'node:process';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './loggin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-recipes-book';

  constructor(
    private authService: AuthService,
    private loggingService: LoggingService
  ) {}
  ngOnInit(): void {
    this.authService.autoLoging();
    this.loggingService.printLog('hello from appComponent ngOnInit');
  }
}
