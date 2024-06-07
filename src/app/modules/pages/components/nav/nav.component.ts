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

  items: Array<{ label: string, icon: string }> = [];
  
  ngOnInit(): void {
    this.loadItems()
  }

  loadItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Pinturas',
        icon: 'pi pi-image'
      },
      {
        label: 'Contact',
        icon: 'pi pi-info-circle'
      }
    ]
  }

}
