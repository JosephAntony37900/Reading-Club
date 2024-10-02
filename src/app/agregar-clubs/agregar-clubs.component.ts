import { Component } from '@angular/core';
import { Form } from '../interfaces/form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-clubs',
  templateUrl: './agregar-clubs.component.html',
  styleUrl: './agregar-clubs.component.css'
})
export class AgregarClubsComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      fecha: ['', Validators.required],
      eleccion: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log('Formulario enviado', this.bookForm.value);
      // Aquí puedes conectar la lógica con tu API en el futuro
    }
  }
}
