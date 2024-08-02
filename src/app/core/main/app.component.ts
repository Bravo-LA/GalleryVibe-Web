import { ToastModule } from 'primeng/toast';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ToastModule,
    RouterOutlet
  ],
  template: `
    <p-toast position="bottom-right"/>
    <router-outlet />
  `
})
export class AppComponent { }
