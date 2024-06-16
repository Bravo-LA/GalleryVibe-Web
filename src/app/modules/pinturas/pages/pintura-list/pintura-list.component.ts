import { PinturasService } from './../../services/pinturas.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Pintura } from '@pinturas/interfaces/pintura';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PinturaFormComponent } from '../pintura-form/pintura-form.component';
import { PinturaCardComponent } from '../pintura-card/pintura-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pintura-list',
  standalone: true,
  imports: [
    TableModule,
    CommonModule
  ],
  templateUrl: './pintura-list.component.html',
  styleUrl: './pintura-list.component.css'
})
export default class PinturaListComponent implements OnInit {

  public list!: Pintura[]
  public loading: boolean = false

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private _pinturaService: PinturasService,
    private _notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.cargarPinturas()
  }

  private cargarPinturas() {
    this.loading = true;
    this._pinturaService.get().subscribe({
      next: (data) => {
        this.list = data
        this.loading = false
      }
    })
    this.loading = false
  }

  openAgregar() {
    this.dialog.open(PinturaFormComponent, {
      autoFocus: false,
      disableClose: false,
      width: '550px'
    })
  }

  openEditar(pintura: Pintura) {
    this.dialog.open(PinturaFormComponent, {
      autoFocus: false,
      disableClose: false,
      data: pintura,
      width: '550px'
    })
  }

  openEliminar(pintura: Pintura) {
    this.dialog.open(PinturaCardComponent, {
      autoFocus: false,
      disableClose: false,
      data: pintura,
      width: '350px'
    })
  }

  openTenicas(){
    this.router.navigate(['/tecnicas-gestion'])
  }

}
