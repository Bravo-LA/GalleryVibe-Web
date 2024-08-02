import { Tecnica } from "./tecnica"

export interface Pintura {
    id?: number
    titulo?: string
    descripcion?: string
    fechaCreacion?: Date
    tipo?: string
    precio?: number
    tecnicaId?: Tecnica
    imageUrl?: string
    usuarioId?: number
}
