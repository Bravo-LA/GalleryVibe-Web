export interface Usuario {
    id?:        number
    nombres:    string
    apellidos:  string
    cedula:     string
    correo:     string
    genero:     number
    fechNac:    Date
    usuario:    string
    contrasena: string
}

export interface Genero {
    id:         number
    genero:     string
}

