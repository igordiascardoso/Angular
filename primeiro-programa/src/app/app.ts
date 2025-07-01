import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponente } from './meu-primeiro/meu-primeiro.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuPrimeiroComponente],
  templateUrl: './app.html',
  styleUrl: './app.scss'

})
export class App {
  protected title = 'primeiro-programa';
}
