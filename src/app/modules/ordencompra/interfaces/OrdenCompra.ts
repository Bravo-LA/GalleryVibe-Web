export interface OrdenCompra{

    id: number;
    Usuario: string;
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