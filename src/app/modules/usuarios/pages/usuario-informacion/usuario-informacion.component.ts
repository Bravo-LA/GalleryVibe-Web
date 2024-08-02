import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genero } from '@usuarios/interfaces/genero';
import { Usuario } from '@usuarios/interfaces/usuario';
import { GeneroService } from '@usuarios/services/genero.service';
import { UsuarioService } from '@usuarios/services/usuario.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-usuario-informacion',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './usuario-informacion.component.html',
  styleUrl: './usuario-informacion.component.css'
})
export default class UsuarioInformacionComponent implements OnInit {

  form!: FormGroup
  loading: boolean = false
  generos: Genero[] = []
  usuarioLogeado!: Usuario

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _token: TokenService,
    private _generoService: GeneroService,
    private _usuarioService: UsuarioService,
    private _notificationService: NotificationService,
  ) {
    this.form = this._fb.group({
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
    this.loadGeneros()
    this.usuarioLogeado = this._token.getUsuario()
    this._usuarioService.getUsuario(this.usuarioLogeado.id!).subscribe({
      next: (data: Usuario) => this.initForm(data)
    })
  }

  initForm(usuario: Usuario){    
    this.form .patchValue({
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      cedula: usuario.cedula,
      correo: usuario.correo,
      genero: usuario.generoId,
      usuario: usuario.username,
      contrasena: usuario.password
    })
  }

  loadGeneros(){
    this._generoService.getGeneros().subscribe({
      next: (data) => this.generos = data
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this._notificationService.showError('Up!', 'Campos vacíos')
      return
    }

    const usuario: Usuario = {
      id: this.usuarioLogeado.id,
      nombres: this.nombres.value,
      apellidos: this.apellidos.value,
      cedula: this.cedula.value,
      correo: this.correo.value,
      generoId: this.genero.value,
      fechNac: this.fechaNac.value,
      username: this.usuario.value,
      password: this.contrasena.value
    }

    this._usuarioService.updateUsuario(usuario).subscribe({
      next: (data) => {
        this._notificationService.showSuccess('Atención',data)
        this._router.navigate(['/home'])
      }
    })

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
