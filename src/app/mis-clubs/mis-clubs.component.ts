import { Component } from '@angular/core';
import { Cards } from '../interfaces/cards';

@Component({
  selector: 'app-mis-clubs',
  templateUrl: './mis-clubs.component.html',
  styleUrl: './mis-clubs.component.css'
})
export class MisClubsComponent {
  clubs: Cards[] = [
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
    { title: 'Reading Club', subtitle: '' },
  ];
  otherClubs: Cards[]= [
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
    {title: "Reading club", subtitle: ""},
  ]

  // Aquí podrías agregar la lógica para agregar un libro, por ahora es solo un placeholder
  agregarClub() {
    console.log('Redirigir a la página para agregar un libro');
  }
}
