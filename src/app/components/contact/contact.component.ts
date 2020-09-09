import { Component, OnInit } from '@angular/core';
import { Info } from '../../models/info';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public page_title: string;
  public info: Array<Info>;

  constructor() { 
    this.page_title = 'Contacto';
    this.info = [new Info('', '')];
  }

  ngOnInit(): void {
    this.populateInfo();
  }

  populateInfo(){
    this.info = [];
    this.info.push(new Info('Dirección', 'Mislata, Valencia'));
    this.info.push(new Info('Email', 'carlos17vlc@gmail.com'));
    this.info.push(new Info('Teléfono', '+34 633341170'));
    this.info.push(new Info('Skype', 'csnts92'));
  }

}
