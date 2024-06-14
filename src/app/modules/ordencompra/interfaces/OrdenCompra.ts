export interface OrdenCompra{

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