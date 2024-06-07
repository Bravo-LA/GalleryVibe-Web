import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../services/usuario.service';
import { NotificationService } from '../../../../shared/services/notification.service';
import { Genero, Usuario } from '../../interfaces/usuario';
import { GeneroService } from '../../services/genero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-formulario',
  standalone: true,
  imports: [
    NgbCarouselModule,
    ReactiveFormsModule
  ],
  templateUrl: './usuario-formulario.component.html',
  styleUrl: './usuario-formulario.component.css'
})
export default class UsuarioFormularioComponent implements OnInit {

  paused = false;
  pauseOnHover = true;
  form: FormGroup
  loading: boolean = false
  generos: Genero[] = []

  images: string[] = [];

  imagesPath = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png'
  ]

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

  ngOnInit(): void {
    this.images = this.imagesPath.map(image => `assets/image/carousel/${image}`);
    this.generos = this.generoService.getGeneros
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

    this._usuarioService.registrarUsuario(usuario).subscribe({
      next: (data: boolean) => {
        if (data) {
          this._notificationService.showSuccess('Ouh yes!', 'Ahora inicia sesión')
          this.router.navigate(['/login'])
        } else this._notificationService.showError('Lo sentimos', 'Ha ocurrido un error')
      }
    })

    this.form.reset()
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
