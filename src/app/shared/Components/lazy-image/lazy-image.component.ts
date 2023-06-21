import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = 'No title';

  public hashLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Url propierty is required');
  }

  onLoad() {
    setTimeout(() => {
      this.hashLoaded = true;
    }, 1000);
  }

}
