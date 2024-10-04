import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service'; // Importar el servicio

@Component({
  selector: 'app-agregar-libros',
  templateUrl: './agregar-libros.component.html',
  styleUrls: ['./agregar-libros.component.css']
})
export class AgregarLibrosComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      date: ['', Validators.required],
      state: ['', Validators.required],
      review: ['', Validators.required],
      user_Id: ['1']
    });
  }
  
  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: (response) => {
          console.log('Libro agregado:', response);
          // Puedes agregar lógica para redirigir o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al agregar libro:', error);
        }
      });
    }
  }
}
