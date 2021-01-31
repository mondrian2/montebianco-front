import { ExercicioTipo } from './../../models/exercicio-tipo';
import { ExercicioItem } from './../../models/exercicio-item';
import { Exercicio } from './../../models/exercicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.scss']
})
export class ExercicioComponent implements OnInit {

  exercicio: Exercicio;
  item: ExercicioItem;
  itens: ExercicioItem[];
  tipo: ExercicioTipo;

  constructor() { 
    this.exercicio = new Exercicio;
    this.tipo = new ExercicioTipo;    
    this.item = new ExercicioItem;
    this.item.opcoes = [];
    this.itens = [];
  }

  ngOnInit(): void {
    this.exercicio.comando = "Complete le frase basandodovi sulla teoria.";
    this.exercicio.id = 1;
    this.tipo.id = 1;
    this.tipo.tipo = "complete";
    this.item.exercicio_id = this.exercicio.id;
    this.item.item = "Le consolante doppie vanno pronunciate con un suono";
    this.item.opcoes.push('consolate');
    this.item.opcoes.push('consolate2');
    this.item.tipo_id = this.tipo.id;
    this.itens.push(this.item);
  }

}
