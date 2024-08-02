import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tecnica } from '@pinturas/interfaces/tecnica';
import { TecnicasService } from '@pinturas/services/tecnicas.service';
import { TableModule } from 'primeng/table';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PinturaTecnicaFormComponent } from '../pintura-tecnica-form/pintura-tecnica-form.component';

@Component({
  selector: 'app-pintura-tecnica-list',
  standalone: true,
  imports: [  
    TableModule
  ],
  templateUrl: './pintura-tecnica-list.component.html',
  styleUrl: './pintura-tecnica-list.component.css'
})
export default class PinturaTecnicaListComponent {

  public list!: Tecnica[]
  public loading: boolean = false

  constructor(
    private dialog: MatDialog,
    private _tecnicasService: TecnicasService,
    private _notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.cargarTecnicas()
  }

  private cargarTecnicas() {
    this.loading = true;
    this._tecnicasService.getTecnicas().subscribe({
      next: (data) => {
        this.list = data
        this.loading = false
      }
    })
    this.loading = false
  }

  openAgregar() {
    this.dialog.open(PinturaTecnicaFormComponent, {
      autoFocus: false,
      disableClose: false,
      width: '450px'
    }).afterClosed().subscribe({
      next: () => this.cargarTecnicas()
    })
  }

  openEditar(tecnica: Tecnica) {
    this.dialog.open(PinturaTecnicaFormComponent, {
      autoFocus: false,
      disableClose: false,
      data: tecnica,
      width: '450px'
    }).afterClosed().subscribe({
      next: () => this.cargarTecnicas()
    })
  }

  openEliminar(tecnica: Tecnica) {
    this._tecnicasService.deleteTecnica(tecnica.id!).subscribe({
      next: (data) => {
        this._notificationService.showSuccess('Atención',data)
        this.cargarTecnicas()
      }
    })
  }

}
