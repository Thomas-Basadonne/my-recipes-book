import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`,
})
export class LoadingSpinner {}
