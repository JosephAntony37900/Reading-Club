import { Component } from '@angular/core';
import { Cards } from '../interfaces/cards';

@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.component.html',
  styleUrl: './mis-libros.component.css'
})
export class MisLibrosComponent {
  libros: Cards[] = [
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
  ];

  // Aquí podrías agregar la lógica para agregar un libro, por ahora es solo un placeholder
  agregarLibro() {
    console.log('Redirigir a la página para agregar un libro');
  }
}
