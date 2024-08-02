import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '@usuarios/interfaces/usuario';
import { UsuarioService } from '@usuarios/services/usuario.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-usuario-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './usuario-eliminar.component.html',
  styleUrl: './usuario-eliminar.component.css'
})
export class UsuarioEliminarComponent {

  constructor(
    private _router: Router,
    private _token: TokenService,
    private _usuarioService: UsuarioService,
    private _notificationService: NotificationService,
    private _dialogRef: MatDialogRef<UsuarioEliminarComponent>,
  ) { }

  eliminar() {
    const usuario: Usuario = this._token.getUsuario()
    this._usuarioService.deleteUsuario(usuario.id!).subscribe({
      next: (data) => {
        this._notificationService.showSuccess('Atención',data)
        this._dialogRef.close()
        this._router.navigate(['/login'])
      }
    })
  }

}
