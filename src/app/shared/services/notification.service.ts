import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  private showMessage(
    title: string,
    detail: string,
    severity: string
  ) {
    this.messageService.add(
      {
        severity: severity,
        summary: title,
        detail: detail,
        life: 5000
      }
    );
  }

  showError(title: string, detail: string) {
    this.showMessage(title, detail, 'error');
  }

  showSuccess(title: string, detail: string) {
    this.showMessage(title, detail, 'success');
  }

  showWarning(title: string, detail: string) {
    this.showMessage(title, detail, 'warn');
  }
}
