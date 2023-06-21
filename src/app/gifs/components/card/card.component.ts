import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {


  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif ) throw new Error('Gif property is required');
  }

  get url(): string {
    return this.gif.images.fixed_width.url;
  }

  get title(): string {
    return this.gif.title;
  }
}
