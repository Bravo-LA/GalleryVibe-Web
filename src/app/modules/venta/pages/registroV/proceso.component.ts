import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NavComponent } from 'src/app/modules/pages/components/nav/nav.component';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  precio: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Shiba Inu', precio: 10.07, status: 'Y'},
  {position: 2, name: 'Lirio', precio: 4.00, status: 'Y' },

];

@Component({
  selector: 'app-proceso',
  standalone: true,
  imports: [RouterLink, RouterOutlet,MatButtonToggleModule,NavComponent,MatTableModule],
  templateUrl: './proceso.component.html',
  styleUrl: './proceso.component.css'
})



export class ProcesoComponent {
  displayedColumns: string[] = ['position', 'name', 'precio', 'status'];
  dataSource = ELEMENT_DATA;
}
