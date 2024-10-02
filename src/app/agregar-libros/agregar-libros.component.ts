import { Component } from '@angular/core';
import { Form } from '../interfaces/form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-libros',
  templateUrl: './agregar-libros.component.html',
  styleUrls: ['./agregar-libros.component.css']
})
export class AgregarLibrosComponent {
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
