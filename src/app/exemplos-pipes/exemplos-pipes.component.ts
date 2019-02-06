import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book: any = {
    title: 'Algum livro',
    rating: 4.54321,
    numberPages: 300,
    price: 39.99,
    releaseDate: new Date(2018, 6, 6),
    url: 'https://www.amazon.com.br/Criando-apps-para-empresas-'
    + 'Android-ebook/dp/B01IJQ0AU6/ref=sr_1_2?__mk_pt_BR=%C3%85M%'
    + 'C3%85%C5%BD%C3%95%C3%91&keywords=android&qid=1549461208&sr=8-2'
  };

  constructor() { }

  ngOnInit() {
  }

}
