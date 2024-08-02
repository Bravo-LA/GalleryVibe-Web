import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pintura } from '@pinturas/interfaces/pintura';
import { PinturasService } from '@pinturas/services/pinturas.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-pintura-card',
  standalone: true,
  imports: [],
  templateUrl: './pintura-card.component.html',
  styleUrl: './pintura-card.component.css'
})
export class PinturaCardComponent {

 constructor(
    private _pinturaService: PinturasService,
    private _notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Pintura,
    private _dialogRef: MatDialogRef<PinturaCardComponent>,
  ) { }

  eliminar() {
    this._pinturaService.deletePintura(this.data.id!).subscribe({
      next: (data) => {
        this._notificationService.showSuccess('Atención',data)
        this._dialogRef.close()
      }
    })
  }

}
