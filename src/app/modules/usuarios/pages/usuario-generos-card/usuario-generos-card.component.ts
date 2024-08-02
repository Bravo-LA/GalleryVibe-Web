import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Genero } from '@usuarios/interfaces/genero';
import { GeneroService } from '@usuarios/services/genero.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-usuario-generos-card',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './usuario-generos-card.component.html',
  styleUrl: './usuario-generos-card.component.css'
})
export class UsuarioGenerosCardComponent implements OnInit {

  public form!: FormGroup
  public title: String = "Agregar"

  constructor(
    private fb: FormBuilder,
    private generoService: GeneroService,
    private _notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Genero,
    private dialogRef: MatDialogRef<UsuarioGenerosCardComponent>,
  ) {
    this.form = this.fb.group({
      genero: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.initFrom()
    if (this.data) {
      this.initFromEdit(this.data)
    }
  }


  private initFrom() {
    this.form = this.fb.group({
      genero: ['', Validators.required],
    })
  }

  private initFromEdit(data: Genero) {
    this.title = "Modificar"
    this.form.patchValue({
      genero: data.descripcion,
    });
  }

  onAgregar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this._notificationService.showError('Up!', 'Campos vacíos')
      return
    }

    const genero: Genero = {
      descripcion: this.genero.value,
    }

    if (this.data) {
      genero.id = this.data.id
    }

    const updateOrCreate = this.data ?
      this.generoService.updateGenero(genero) :
      this.generoService.addGenero(genero)
    
    updateOrCreate.subscribe({
      next:(data) =>{
        this._notificationService.showSuccess('Atención', 'Acción realizada')
        this.form.reset()
        this.dialogRef.close()
      } 
    })

  }

  get genero() { return this.form.get('genero')! }

}
