import { Component, OnInit } from '@angular/core';

interface Card {
  title: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  cards: Card[] = [
    {
      title: 'Smart Gas',
      description: 'Tarjeta siempre cargada para pagar y deducir tu gasto de combustible.'
    },
    {
      title: 'Smart Gas',
      description: 'Tarjeta siempre cargada para pagar y deducir tu gasto de combustible.'
    },
    {
      title: 'Smart Gas',
      description: 'Tarjeta siempre cargada para pagar y deducir tu gasto de combustible.'
    },
    {
      title: 'Smart Gas',
      description: 'Tarjeta siempre cargada para pagar y deducir tu gasto de combustible.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
