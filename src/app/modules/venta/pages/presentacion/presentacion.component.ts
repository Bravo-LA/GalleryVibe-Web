import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from 'src/app/modules/pages/components/nav/nav.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,RouterOutlet,RouterLink,NavComponent,MatButtonToggleModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {

}
