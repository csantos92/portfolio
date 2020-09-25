import { Component, OnInit } from '@angular/core';
import { Info } from '../../models/info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public page_title: string;
  public second_title: string;
  public first_text: string;
  public info: Array<Info>;

  constructor() { 
    this.page_title = 'Sobre mí';
    this.second_title = 'Mis objetivos';
    this.info = [new Info('', '')];
  }

  ngOnInit(): void {
    this.populateInfo();
  }

  populateInfo(){
    this.info = [];
    this.info.push(new Info('Edad', '28'));
    this.info.push(new Info('Navionalidad', 'Español'));
    this.info.push(new Info('Situación de empleo', 'Empleado'));
    this.info.push(new Info('Lugar de residencia', 'Valencia'));
  }

}
