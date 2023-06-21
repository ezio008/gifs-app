import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService: GifsService) {}

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  public clickTag(tagValue: string) {
    this.gifService.searchTag(tagValue);
  }
}
