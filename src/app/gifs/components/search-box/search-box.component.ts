import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5 style="margin-top: 15px;">Buscar:</h5>
    <hr style="margin-top: 10px;" />
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      style="height: 45px;"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';

    console.log(this.gifsService.tagsHistory);
  }
}
