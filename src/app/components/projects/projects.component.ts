import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public page_title: string;
  public cards: Array<Card>;

  constructor() {
    this.page_title = 'Proyectos';
    this.cards = [new Card('', '', '', [''], [''], [''])];
  }

  ngOnInit(): void {
    this.populateCards();
  }

  populateCards() {
    this.cards = [];
    this.cards.push(new Card('assets/img/forum.png', 'Programming forum', '(Front-End Angular)', ['fab fa-angular', 'fab fa-js', 'fab fa-html5', 'fab fa-css3', 'fab fa-sass', 'fab fa-bootstrap'], ['fab fa-github'] , ['https://github.com/csantos92/forum-front-end']));
    this.cards.push(new Card('assets/img/node.png', 'Programming forum', '(Back-End NodeJS)', ['fab fa-node-js', 'fas fa-database'], ['fab fa-github'], ['https://github.com/csantos92/forum-back-end']));
    this.cards.push(new Card('assets/img/front.png', 'Tech Blog', '(Front-End Angular)', ['fab fa-angular', 'fab fa-js', 'fab fa-html5', 'fab fa-css3', 'fab fa-sass', 'fab fa-bootstrap'], ['fab fa-github'] , ['https://github.com/csantos92/blog-front-end']));
    this.cards.push(new Card('assets/img/back.png', 'Tech Blog', '(Back-End Laravel)', ['fab fa-laravel', 'fab fa-php', 'fas fa-database'], ['fab fa-github'], ['https://github.com/csantos92/blog-back-end']));
    this.cards.push(new Card('assets/img/posergram.png', 'Posergram', '(Web App Laravel)', ['fab fa-laravel', 'fab fa-php', 'fab fa-html5', 'fab fa-css3', 'fab fa-bootstrap', 'fas fa-database'], ['fab fa-firefox', 'fab fa-github'], ['https://www.csantosdev.com/projects/posergram/public/', 'https://github.com/csantos92/posergram']));
    this.cards.push(new Card('assets/img/shop.png', 'Travel Shop', '(Web App PHP)', ['fab fa-php', 'fab fa-html5', 'fab fa-css3', 'fas fa-database'], ['fab fa-firefox', 'fab fa-github'], ['https://www.csantosdev.com/projects/shop/', 'https://github.com/csantos92/shop-php']));
    this.cards.push(new Card('assets/img/blog.png', 'Music Blog', '(Web App PHP)', ['fab fa-php', 'fab fa-html5', 'fab fa-css3', 'fab fa-bootstrap', 'fab fa-database'], ['fab fa-firefox', 'fab fa-github'], ['https://www.csantosdev.com/projects/blog/', 'https://github.com/csantos92/blog-php']));
    this.cards.push(new Card('assets/img/cv.png', 'CV & Portfolio', '(Web App Angular)', ['fab fa-angular', 'fab fa-html5', 'fab fa-css3', 'fab fa-js', 'fab fa-sass'], ['fab fa-firefox', 'fab fa-github'], ['https://www.csantosdev.com/', 'https://github.com/csantos92/portfolio']));
    this.cards.push(new Card('assets/img/ff7.png', 'Final Fantasy', '(Static Web)', ['fab fa-html5', 'fab fa-css3', 'fab fa-js'], ['fab fa-firefox', 'fab fa-github'], ['https://www.csantosdev.com/projects/ff/', 'https://github.com/csantos92/finalfantasy']));
    this.cards.push(new Card('assets/img/ryokou.png', 'Ryokou: Mis viajes', '(Android APP)', ['fab fa-java', 'fab fa-android'], ['fab fa-google-play'], ['https://play.google.com/store/apps/details?id=dev.csantos.ryokou']));
    this.cards.push(new Card('assets/img/jap.png', 'Juego de Japonés', '(Android Game)', ['fab fa-unity', 'fab fa-android'], ['fab fa-google-play'], ['https://play.google.com/store/apps/details?id=com.csantosdev.kanjin5thegame&gl=ES']));
    this.cards.push(new Card('assets/img/python.png', 'Dominio disponible', '(Script)', ['fab fa-python'], ['fab fa-github'], ['https://github.com/csantos92/domainsearch-script']));
  }

}
