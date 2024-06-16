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
  {position: 1, name: 'Pintura1', precio: 10.07, status: 'Y'},
  {position: 2, name: 'Pintura2', precio: 4.00, status: 'N' },
  {position: 3, name: 'Fotografía1', precio: 6.94, status: 'Y'},
  {position: 4, name: 'Pintura3', precio: 9.01, status: 'Y'},
  {position: 5, name: 'Fotografía2', precio: 10.81, status: 'N'},
  {position: 6, name: 'Fotografía3', precio: 12.01, status: 'N'},
  {position: 7, name: 'Pintura4', precio: 14.00, status: 'N'},
  {position: 8, name: 'Pintura5', precio: 15.99, status: 'Y'},
  {position: 9, name: 'Diseño1', precio: 18.99, status: 'Y'},
  {position: 10, name: 'Diseño2', precio: 20.17, status: 'N'},
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
