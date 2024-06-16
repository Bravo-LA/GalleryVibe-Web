import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Genero } from '@usuarios/interfaces/usuario';
import { GeneroService } from '@usuarios/services/genero.service';
import { TableModule } from 'primeng/table';
import { UsuarioGenerosCardComponent } from '../usuario-generos-card/usuario-generos-card.component';

@Component({
  selector: 'app-usuario-generos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
  ],
  templateUrl: './usuario-generos-list.component.html',
  styleUrl: './usuario-generos-list.component.css'
})
export default class UsuarioGenerosListComponent implements OnInit {

  public list: Genero[]
  public loading: boolean = false

  constructor(
    private dialog: MatDialog,
    private generoService: GeneroService,
  ) { }

  ngOnInit(): void {
    this.loadGeneros()
  }

  loadGeneros(){
    this.list = this.generoService.getGeneros()
  }

  openAgregar() {
    this.dialog.open(UsuarioGenerosCardComponent, {
      autoFocus: false,
      disableClose: false,
      width: '460px'
    }).afterClosed().subscribe({
      next: () => this.loadGeneros()
    })
  }

  oepnActualizar(objeto: Genero) {
    this.dialog.open(UsuarioGenerosCardComponent, {
      autoFocus: false,
      disableClose: false,
      width: '460px',
      data: objeto
    }).afterClosed().subscribe({
      next: () => this.loadGeneros()
    })
  }

  openEliminar(objeto: Genero) {
    this.generoService.deleteGenero(objeto.id!)
    this.loadGeneros()
  }

}
