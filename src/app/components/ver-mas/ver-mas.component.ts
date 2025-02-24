import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from '../../interfaces/proyecto';

@Component({
  selector: 'app-ver-mas',
  standalone: true,
  imports: [],
  templateUrl: './ver-mas.component.html',
  styleUrl: './ver-mas.component.css'
})
export class VerMasComponent implements OnInit {

  proyecto: Proyectos = {id:0,title:'',img:'',text_title:'',text:'',tools:''}

  constructor( private data: DataService,
    private aRoute:ActivatedRoute
  ){
    
  }

  ngOnInit(): void {

    this.getData()

    const id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.data.obtenerProyectoPorId(id).subscribe(data => {
      this.proyecto = data
    });
  }

  getData(){
    this.data.getProyectos().subscribe( (data)=>{
      console.log(data)
    } )
  }



}
