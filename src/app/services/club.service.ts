import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos los clubs
  getClubs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clubs`);
  }

  // Obtener detalles de un club
  getClubById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/club/${id}`);
  }

  // Crear un club nuevo
  addClub(clubData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}/clubs`, clubData, { headers });
  }

  // Obtener todos los libros
  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }
}
