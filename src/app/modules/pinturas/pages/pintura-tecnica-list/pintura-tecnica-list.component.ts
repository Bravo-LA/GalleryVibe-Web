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
    this._tecnicasService.get().subscribe({
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
    })
  }

  openEditar(tecnica: Tecnica) {
    this.dialog.open(PinturaTecnicaFormComponent, {
      autoFocus: false,
      disableClose: false,
      data: tecnica,
      width: '450px'
    })
  }

  openEliminar(tecnica: Tecnica) {
    this._tecnicasService.delete(tecnica.id!)
    this.cargarTecnicas()
  }

}
