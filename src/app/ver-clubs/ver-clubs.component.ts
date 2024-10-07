import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-clubs',
  templateUrl: './ver-clubs.component.html',
  styleUrls: ['./ver-clubs.component.css']  // Aquí es 'styleUrls' en plural
})
export class VerClubsComponent {
  clubInfo: any;
  editableClub: any;
  editMode: boolean= false;
  showModal: boolean= false;

  constructor(private route: ActivatedRoute, private clubService: ClubService, private router: Router) {}
  
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.clubService.getClubById(id).subscribe({
        next: (data) => {
          this.clubInfo = data;
        },
        error: (error) =>{
            console.error('Error al obtener los detalles del club')
        },
      })
    }
  }

  openModal() {
    this.showModal = true; // Mostrar modal
  }

  closeModal() {
    this.showModal = false; // Ocultar modal
  }

  confirmDelete() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID del libro

    if (id) {
      this.clubService.deleteClub(id).subscribe({
        next: (deleteClub) => {
          console.log('Libro eliminado:', deleteClub);
          this.clubInfo = null; // Eliminar el club de la vista
          this.closeModal(); // Cerrar la modal después de eliminar
          // Redirigir al inicio después de eliminar
        this.router.navigate(['/misClubs']);
        },
        error: (error) => {
          console.error('Error al eliminar el libro:', error);
        }
      });
    }
  }

  edit(){
    this.editMode= true;
    this.editableClub= {...this.clubInfo};
  }

  cancel(){
    this.editMode = false;
    this.editableClub = {...this.clubInfo};
  }

  save(){
    const id = this.route.snapshot.paramMap.get('id');

    if (id && this.editableClub) {
      this.clubService.updateClub(id, this.editableClub).subscribe({
        next: (updateClub) => {
          this.clubInfo= updateClub; //actualizar los datos del club
          this.editMode= false;
        }
      })
    }
  }

  
  comentarios = [
    { usuario: 'Nombre de usuario 1', mensaje: 'Este es el primer comentario predeterminado del chat.' },
    { usuario: 'Nombre de usuario 2', mensaje: 'Este es el segundo comentario predeterminado del chat.' },
    { usuario: 'Nombre de usuario 3', mensaje: 'Este es el tercer comentario predeterminado del chat.' }
  ];
}
