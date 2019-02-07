import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


  /*
    NÃO FAZER ITERAÇÕES EM ARRAYS COM PIPES
  */


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

  books: string[] = ['Java', 'Angular 2'];

  filter: string;

  constructor() { }

  ngOnInit() {
  }

  addBook(value) {
    this.books.push(value);
  }

  getBooks() {
    if (this.books.length === 0 || this.filter === undefined || this.filter.trim() === '') {
      return this.books;
    }

    return this.books.filter((v) => {
      if (v.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

}
