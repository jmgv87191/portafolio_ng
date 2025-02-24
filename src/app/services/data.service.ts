import { Injectable } from '@angular/core';
import { proyectos } from '../data/proyectos.data'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProyectos():Observable<any[]>{
    return of(proyectos);
  }

  obtenerProyectoPorId(id: number): Observable<any | undefined> {
    const proyecto = proyectos.find(p => p.id === id);
    return of(proyecto);
  }

}
