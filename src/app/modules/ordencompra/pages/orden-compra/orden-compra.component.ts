import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog'; // Importación correcta
import { CommonModule } from '@angular/common';

interface OrdenCompra {
  idOrdenCompra: number;
  idUsuario: number;
  fechaCreacion: Date;
  estadoOrden: string;
  totalOrden: number;
  idImagen: number;
  cantidad: number;
  precioUnitario: number;
  metodoPago: string;
  direccionEnvio: string;
  comentariosAdicionales: string;
}

@Component({
  selector: 'app-orden-compra',
  standalone: true,
  imports: [
  
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule, 
    ButtonModule,
    InputTextModule,
    CommonModule
  ],
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {
  ordenesCompra: OrdenCompra[] = [];
  ordenForm: FormGroup;
  displayModal: boolean = false;
  editMode: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ordenForm = this.fb.group({
      idOrdenCompra: [null],
      idUsuario: [null],
      fechaCreacion: [null],
      estadoOrden: [''],
      totalOrden: [null],
      idImagen: [null],
      cantidad: [null],
      precioUnitario: [null],
      metodoPago: [''],
      direccionEnvio: [''],
      comentariosAdicionales: ['']
    });
  }

  openNew() {
    this.ordenForm.reset();
    this.displayModal = true;
    this.editMode = false;
  }

  openEdit(orden: OrdenCompra) {
    this.ordenForm.patchValue(orden);
    this.displayModal = true;
    this.editMode = true;
  }

  deleteOrden(id: number) {
    this.ordenesCompra = this.ordenesCompra.filter(orden => orden.idOrdenCompra !== id);
  }

  saveOrden() {
    if (this.editMode) {
      const index = this.ordenesCompra.findIndex(orden => orden.idOrdenCompra === this.ordenForm.value.idOrdenCompra);
      this.ordenesCompra[index] = this.ordenForm.value;
    } else {
      this.ordenForm.value.idOrdenCompra = this.ordenesCompra.length + 1;
      console.log(this.ordenForm.value);
      this.ordenesCompra.push(this.ordenForm.value);

    }
    this.displayModal = false;
  }
}
