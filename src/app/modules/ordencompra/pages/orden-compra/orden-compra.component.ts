import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog'; 
import { CommonModule } from '@angular/common';
import { OrdenCompraService } from '../../servicios/orden-compra.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { ResolveEnd } from '@angular/router';

interface OrdenCompra {
  id: number;
  usuario: string;
  feichaCreacion: Date;
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
    CommonModule,
    HttpClientModule

  ],
  providers:[OrdenCompraService],
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {
  ordenesCompra: OrdenCompra[] = [];
  ordenForm: FormGroup;
  displayModal: boolean = false;
  editMode: boolean = false;

  constructor(private fb: FormBuilder, private ordenservicios: OrdenCompraService) { }

  ngOnInit(): void {
    this.ordenForm = this.fb.group({
      Usuario: [null],
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
    this.ObtenerTodos()
  }

  ObtenerTodos(){
    this.ordenservicios.ObtenerOrdenCompra().subscribe(
      res =>{
        this.ordenesCompra=res
        console.log(this.ordenesCompra)
      }
    )
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
    //this.ordenesCompra = this.ordenesCompra.filter(orden => orden.idOrdenCompra !== id);
    this.ordenservicios.EliminarOrdenCompra(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      }
    )
  }

  saveOrden() {
    if (this.editMode) {
      //const index = this.ordenesCompra.findIndex(orden => orden.idOrdenCompra === this.ordenForm.value.idOrdenCompra);
      //this.ordenesCompra[index] = this.ordenForm.value;
    } else {
      //this.ordenForm.value.idOrdenCompra = this.ordenesCompra.length + 1;
      //console.log(this.ordenForm.value);
      //this.ordenesCompra.push(this.ordenForm.value);
      this.ordenservicios.GuardarOrdenCompra(this.ordenForm.value).subscribe(
        res =>{
          console.log(res)
          this.ngOnInit();
        }
      );

    }
    this.displayModal = false;
  }
}
