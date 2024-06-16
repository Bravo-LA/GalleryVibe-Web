import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tecnica } from '@pinturas/interfaces/tecnica';
import { TecnicasService } from '@pinturas/services/tecnicas.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-pintura-tecnica-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './pintura-tecnica-form.component.html',
  styleUrl: './pintura-tecnica-form.component.css'
})
export class PinturaTecnicaFormComponent implements OnInit {

  form!: FormGroup
  loading: boolean = false
  btnText: string = 'Agregar'
  list: Tecnica[] = []

  constructor(
    private fb: FormBuilder,
    private _tecnicasService: TecnicasService,
    @Inject(MAT_DIALOG_DATA) public data: Tecnica,
    private _notificationService: NotificationService,
    private dialogRef: MatDialogRef<PinturaTecnicaFormComponent>,
  ) { }

  ngOnInit(): void {
    this.inicializarForm()
    if (this.data) {
      this.btnText = "Modificar"
      this.inicializarFormData(this.data)
    }
  }

  private inicializarForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  private inicializarFormData(data: Tecnica) {
    this.form.patchValue({
      nombre: data.nombre,
      descripcion: data.descripcion
    })
  }
  
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this._notificationService.showError('Up!', 'Campos vacíos')
      return
    }

    const tecnica: Tecnica = {
      nombre: this.nombre?.value,
      descripcion: this.descripcion.value,
     
    }

    if (this.data) tecnica.id = this.data.id

    this.loading = true

    const updateOrCreate = this.data
      ? this._tecnicasService.put(tecnica)
      : this._tecnicasService.post(tecnica)

    updateOrCreate.subscribe({
      next: (data) => {
        this._notificationService.showSuccess("Atención",data)
        this.dialogRef.close()
      },
      error: () => this._notificationService.showError('Lo sentimos', 'Ah ocurrido un error'),
      complete: () => this.loading = false
    })

  }

  get nombre() { return this.form.get('nombre')! }
  get descripcion() { return this.form.get('descripcion')! }

}
