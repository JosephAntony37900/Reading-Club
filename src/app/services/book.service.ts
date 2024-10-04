import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos los libros
  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  // Crear un libro nuevo
  addBook(bookData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/books`, bookData, { headers });
  }

  // Obtener detalles de un libro
  getBookById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/book/${id}`);
  }

  // Actualizar un libro
  updateBook(id: string, bookData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/books/${id}`, bookData);
  }

  // Eliminar un libro
  deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/books/delete/${id}`);
  }
}
