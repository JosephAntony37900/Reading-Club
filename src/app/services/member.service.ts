import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://localhost:3000/members'; // Cambia el puerto según tu configuración

  constructor(private http: HttpClient) {}

  // Obtener todos los comentarios
  getAllComments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Crear un comentario
  createComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, comment);
  }
  
  // Eliminar comentario
  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
