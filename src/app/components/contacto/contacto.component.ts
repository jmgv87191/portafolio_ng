import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { from } from 'rxjs';
import { Message } from '../../interfaces/message';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  form: FormGroup;
  mensaje!:Message;

  constructor(private fb: FormBuilder){

    this.form = this.fb.group({
      de:['',Validators.required],
      para:['',Validators.required],
      sobre:['',Validators.required],
      mensaje:['',Validators.required],
    })

  }

  sendMail(){
    this.mensaje = {
      from: this.form.value.de,
      to: this.form.value.para,
      subject: this.form.value.sobre,
      message: this.form.value.mensaje,

    }

    console.log( "este es el mensjae", this.mensaje)


    emailjs.init('XOIL6b9P5rsfGjv59')
    emailjs.send("service_dejr5mg","template_73f750j",{
      subject: this.form.value.sobre,
      to_name: this.form.value.para,
      from_name: this.form.value.de,
      message: this.form.value.mensaje,
      });

      Swal.fire({
        title: "Mensaje Enviado!",
        text: "Mensaje enviado con exito",
        icon: "success"
      });


  }





}
