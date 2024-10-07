import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-clubs',
  templateUrl: './agregar-clubs.component.html',
  styleUrls: ['./agregar-clubs.component.css']
})
export class AgregarClubsComponent implements OnInit {
  clubForm: FormGroup;
  books: any[] = [];  // Aquí almacenaremos los libros obtenidos de la API

  constructor(private fb: FormBuilder, private clubService: ClubService, private router: Router) {
    this.clubForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      members: ['', Validators.required],
      date: ['', Validators.required],
      idBook: ['', Validators.required],  // Ahora es requerido
      description: ['', Validators.required],
      idOwner: ['1']  // El ID del propietario, puedes cambiarlo si es necesario
    });
  }

  ngOnInit(): void {
    // Obtener los libros cuando se cargue el componente
    this.clubService.getBooks().subscribe({
      next: (response) => {
        this.books = response;  // Guarda la lista de libros
      },
      error: (error) => {
        console.error('Error al obtener los libros:', error);
      }
    });
  }

  onSubmit() {
    if (this.clubForm.valid) {
      this.clubService.addClub(this.clubForm.value).subscribe({
        next: (response) => {
          console.log('Club creado:', response);
          this.router.navigate(['/misClubs']);
        },
        error: (error) => {
          console.error('Error al crear un club:', error);
        }
      });
    }
  }
}
