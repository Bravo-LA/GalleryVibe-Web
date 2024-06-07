import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genero, Usuario } from '@usuarios/interfaces/usuario';
import { GeneroService } from '@usuarios/services/genero.service';
import { UsuarioService } from '@usuarios/services/usuario.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-usuario-informacion',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './usuario-informacion.component.html',
  styleUrl: './usuario-informacion.component.css'
})
export default class UsuarioInformacionComponent {

  form!: FormGroup
  loading: boolean = false
  generos: Genero[] = []

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private generoService: GeneroService,
    private _usuarioService: UsuarioService,
    private _notificationService: NotificationService,
  ) {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: ['', Validators.required],
      correo: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNac: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this._notificationService.showError('Up!', 'Campos vacíos')
      return
    }

    const usuario: Usuario = {
      nombres: this.nombres.value,
      apellidos: this.apellidos.value,
      cedula: this.cedula.value,
      correo: this.correo.value,
      genero: this.genero.value,
      fechNac: this.fechaNac.value,
      usuario: this.usuario.value,
      contrasena: this.contrasena.value
    }
  }

  get nombres() { return this.form.get('nombres')! }
  get apellidos() { return this.form.get('apellidos')! }
  get cedula() { return this.form.get('cedula')! }
  get correo() { return this.form.get('correo')! }
  get genero() { return this.form.get('genero')! }
  get fechaNac() { return this.form.get('fechaNac')! }
  get usuario() { return this.form.get('usuario')! }
  get contrasena() { return this.form.get('contrasena')! }

}
