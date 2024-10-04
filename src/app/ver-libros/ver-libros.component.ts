import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-ver-libros',
  templateUrl: './ver-libros.component.html',
  styleUrls: ['./ver-libros.component.css']
})
export class VerLibrosComponent implements OnInit {
  libro: any;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID desde la URL
  
    if (id) {
      this.bookService.getBookById(id).subscribe({
        next: (data) => {
          this.libro = data;
        },
        error: (error) => {
          console.error('Error al obtener los detalles del libro:', error);
        }
      });
    }
  }
  
}
