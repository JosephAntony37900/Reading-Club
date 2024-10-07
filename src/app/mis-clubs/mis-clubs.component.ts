import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-clubs',
  templateUrl: './mis-clubs.component.html',
  styleUrls: ['./mis-clubs.component.css']
})
export class MisClubsComponent implements OnInit {
  clubs: any[] = [];

  constructor(private clubService: ClubService, private router: Router) {}

  ngOnInit(){
    this.clubService.getClubs().subscribe({
      next: (data) => {
        this.clubs = data;
      },
      error: (error) => {
        console.error('Error al obtener los clubs', error);
      }
    })
  }

  agregarClub() {
    this.router.navigate(['/agregarClub'])
  }

  verClub(id: number){
    this.router.navigate([`/verClub/${id}`])
  }
}
