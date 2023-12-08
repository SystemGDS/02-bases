import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  constructor(){}
  public heroNames: string[] = ['Spiderman', 'Ironman','Hulk','She Hulk','Thor']
  public deleteHero?: string;
  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop()
  }

}
