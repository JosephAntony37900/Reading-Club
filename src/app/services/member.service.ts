import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://localhost:3000/members';

  constructor(private http: HttpClient) {}

  // Obtener todos los comentarios de un club
  getAllComments(clubId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/coment/club/${clubId}`);
  }

  createComment(comment: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/coment`, comment);
  }
  
  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/coment/delete/${id}`);
  }
}
