import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.component.html',
  styleUrls: ['./mis-libros.component.css']
})
export class MisLibrosComponent implements OnInit {
  libros: any[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.libros = data;
      },
      error: (error) => {
        console.error('Error al obtener libros:', error);
      }
    });
  }

  agregarLibro() {
    this.router.navigate(['/agregarLibro']);
  }

  verLibro(id: number) {
    this.router.navigate([`/verLibro/${id}`]); //aquí es donde deberia de implementar la lógica
  }
  
}
