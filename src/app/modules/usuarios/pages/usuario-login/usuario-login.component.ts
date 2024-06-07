import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../../shared/services/notification.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './usuario-login.component.html',
  styleUrl: './usuario-login.component.css',
  providers: []
})
export default class UsuarioLoginComponent {

  form: FormGroup
  loading: boolean = false

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private _notificationService: NotificationService,
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this._notificationService.showError('Ups!', 'Campos vacíos');
      return
    }

    const credenciales = {
      usuario: this.usuario.value,
      contrasena: this.contrasena.value
    }

    this._usuarioService.authentication(credenciales).subscribe({
      next: (data: string) => {
        if (data == '') this._notificationService.showWarning('Lo sentimos', 'Credenciales incorrectas')
        else {
          this._notificationService.showSuccess('Enhorabuena', 'Bienvenido a Gallery Vire')
          this.router.navigate(['/home'])
        }
      }
    })

    this.form.reset()

  }

  get usuario() { return this.form.get('usuario')! }
  get contrasena() { return this.form.get('contrasena')! }

}
