import { Component } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
import {  RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  proyectos: Proyecto [] = [

    {
      id:1,
      title: 'Ejemplo facturas',
      img: '../../../assets/pc.jpg',
      text_title: 'Proyecto de facturas en Angular',
      text:`Ejercicio realizado en angular consiste en una lista de productos en la que puedes
      agregar(nombre, precio y cantidad) o eliminar y muestra un desplegado del total`,
      link: '../../../assets/fact/index.html'
    },
    {
      id:2,
      title: 'Carrito de compras',
      img: '../../../assets/carrito-de-compras.png',
      text_title: 'Hecho en Angular',
      text:`Esta hecho en angular sin utilizar una base de datos, toda la informacion se consulta
      de una base simulada en typescript y se utiliza session storage para guardar los cambios realizados`,
      link:'../../../assets/carrito_compras/index.html'

    },
    {
      id:3,
      title: 'Agregar usuarios',
      img: '../../../assets/agregar-usuario.png',
      text_title: 'Interfaz para administrar usuarios',
      text:`Operaciones CRUD (Create, Read, Update, Delete) para la administracion de usuarios`,
      link:'../../../assets/usuario/index.html'

    },
    {
      id:4,
      title: 'App Paises',
      img: '../../../assets/bandera.png',
      text_title: 'App para buscar y ver datos de los paises del mundo',
      text:`Implementacion y uso de la api "restcountries" y uso de local storage para la persistencia de datos`,
      link:'../../../assets/paises/index.html'

    },
    {
      id:5,
      title: 'Pipes App',
      img: '../../../assets/bandera.png',
      text_title: 'Practica implementando los pipes disponibles en Angular',
      text:`Implementacion y uso de todos los pipes contenidos en angular asi como prime ng para el desarrollo de la interfaz`,
      link:'../../../assets/pipes/index.html'

    }, 
  ]

  proyectos_html: Proyecto [] = [
    {
      id:6,
      title: '100 días CSS',
      img: '../../../assets/100dias.png',
      text_title: 'Reto de los 100 días de CSS!!!',
      text: `Estaré subiendo los desafíos del reto de los 100 días CSS, hasta el día de hoy van <span class="highlight">6/100</span>`,
      link: '../../../assets/100_dias_css/index.html'
    },
    {
      id:7,
      title: 'Cursos CSS',
      img: '../../../assets/css.jpg',
      text_title: 'Proyecto de facturas en Angular',
      text:`El enfoque de este proyecto es crear una página web ligera y eficiente sin el uso de frameworks o librerías externas, lo que me permite perfeccionar mis habilidades en estas tecnologías fundamentales y asegurar un código limpio y comprensible.`,
      link: '../../../assets/01_CURSOS_CSS/index.html' 

    },
    {
      id:8,
      title: 'Cafeteria',
      img: '../../../assets/cafe.jpg',
      text_title: 'Hecho en Angular',
      text:`Página web que combina la simplicidad y funcionalidad, utilizando exclusivamente HTML, CSS y JavaScript. Este proyecto está enfocado en crear un diseño atractivo y efectivo`,
      link:'../../../assets/02_CAFETERIA/index.html'

    },

  ]

  



}
