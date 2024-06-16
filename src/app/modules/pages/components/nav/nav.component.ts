import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioEliminarComponent } from '@usuarios/pages/usuario-eliminar/usuario-eliminar.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    MatMenuModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  items: Array<{ label: string, icon: string, route: string }> = [];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadItems()
  }

  openEliminar() {
    this.dialog.open(UsuarioEliminarComponent, {
      autoFocus: false,
      disableClose: false,
      width: '350px'
    })
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
        route: '/*'
      }

    ]
  }

}
