import { Component } from '@angular/core';
import { MegaCard } from '../interfaces/mega-card';

@Component({
  selector: 'app-ver-libros',
  templateUrl: './ver-libros.component.html',
  styleUrl: './ver-libros.component.css'
})
export class VerLibrosComponent {
  clubInfo: MegaCard = {
    title: 'Reading Club',
    localizacion: '',
    miembros: 1,
    fecha: new Date(2024, 8, 29),
    exit: 'Salir del libro',
    autor: 'Pinto',
    genero: 'Procastinación',
    estado: 'Sin dinero'
  };

}
