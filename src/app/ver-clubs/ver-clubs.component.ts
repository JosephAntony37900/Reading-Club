import { Component } from '@angular/core';
import { MegaCard } from '../interfaces/mega-card';

@Component({
  selector: 'app-ver-clubs',
  templateUrl: './ver-clubs.component.html',
  styleUrls: ['./ver-clubs.component.css']  // Aquí es 'styleUrls' en plural
})
export class VerClubsComponent {
  clubInfo: MegaCard = {
    title: 'Reading Club',
    localizacion: 'Tuxtla Gutierrez',
    miembros: 7,
    fecha: new Date(2024, 8, 29),
    exit: 'Salir del club',
    autor: '',
    genero: '',
    estado: ''
  };

  comentarios = [
    { usuario: 'Nombre de usuario 1', mensaje: 'Este es el primer comentario predeterminado del chat.' },
    { usuario: 'Nombre de usuario 2', mensaje: 'Este es el segundo comentario predeterminado del chat.' },
    { usuario: 'Nombre de usuario 3', mensaje: 'Este es el tercer comentario predeterminado del chat.' }
  ];
}
