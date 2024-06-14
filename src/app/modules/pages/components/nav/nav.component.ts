import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  items: Array<{ label: string, icon: string, route:string }> = [];
  
  ngOnInit(): void {
    this.loadItems()
  }

  loadItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home', 
        route: '/home'
      },
      {
        label: 'Pinturas',
        icon: 'pi pi-image',
        route: '/gestion-pintura'
      },
      {
        label: 'Orden de Compra',
        icon: 'pi pi-shopping-cart',
        route: '/orden-compra'
      },
      {
        label: 'Contact',
        icon: 'pi pi-info-circle',
        route:'/*'
      }

    ]
  }

}
