import { Tipo } from "./tipo"

export interface Pintura {
    id?:             number
    titulo?:         string
    descripcion?:    string
    fechaCreacion?:  Date
    tipo?:           Tipo
    precio?:         number
    tecnica?:        string
    imageUrl?:       string
    usuarioId?:      number
}
