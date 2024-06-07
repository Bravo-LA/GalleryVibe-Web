import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pintura } from '@pinturas/interfaces/pintura';
import { Tipo } from '@pinturas/interfaces/tipo';
import { PinturasService } from '@pinturas/services/pinturas.service';
import { TiposService } from '@pinturas/services/tipos.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-pintura-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './pintura-form.component.html',
  styleUrl: './pintura-form.component.css'
})
export class PinturaFormComponent implements OnInit {

  form!: FormGroup
  loading: boolean = false
  btnText: string = 'Agregar'
  list: Tipo[] = []

  constructor(
    private fb: FormBuilder,
    private _tiposService: TiposService,
    private _pinturaService: PinturasService,
    @Inject(MAT_DIALOG_DATA) public data: Pintura,
    private _notificationService: NotificationService,
    private dialogRef: MatDialogRef<PinturaFormComponent>,
  ) { }

  ngOnInit(): void {
    this.inicializarForm()
    this.loadTipos()
    if (this.data) {
      this.btnText = "Modificar"
      this.inicializarFormData(this.data)
    }
  }

  private inicializarForm() {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      tecnica: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  private inicializarFormData(data: Pintura) {
    this.form.patchValue({
      titulo: data.titulo,
      descripcion: data.descripcion,
      fechaCreacion: data.fechaCreacion,
      tipo: data.tipo?.id,
      precio: data.precio,
      tecnica: data.tecnica,
      //imageUrl: data.imageUrl
    })
  }

  private loadTipos() {
    this.loading = true
    this._tiposService.get().subscribe({
      next: (data) => this.list = data
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this._notificationService.showError('Up!', 'Campos vacíos')
      return
    }

    const pintura: Pintura = {
      titulo: this.titulo.value,
      descripcion: this.descripcion.value,
      fechaCreacion: this.fechaCreacion.value,
      tipo: this.tipo.value,
      precio: this.precio.value,
      tecnica: this.tecnica.value,
      imageUrl: this.imageUrl.value,
    }

    if (this.data) pintura.id = this.data.id

    this.loading = true

    const updateOrCreate = this.data
      ? this._pinturaService.put(pintura)
      : this._pinturaService.post(pintura)

    updateOrCreate.subscribe({
      next: () => this.dialogRef.close(),
      error: () => this._notificationService.showError('Lo sentimos', 'Ah ocurrido un error'),
      complete: () => this.loading = false
    })

  }

  get titulo() { return this.form.get('titulo')! }
  get tipo() { return this.form.get('tipo')! }
  get fechaCreacion() { return this.form.get('fechaCreacion')! }
  get precio() { return this.form.get('precio')! }
  get tecnica() { return this.form.get('tecnica')! }
  get imageUrl() { return this.form.get('imageUrl')! }
  get descripcion() { return this.form.get('descripcion')! }

}
