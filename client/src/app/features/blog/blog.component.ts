import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FilterBarComponent } from '../../shared/components/filter-bar/filter-bar.component';
import { FiltersService } from '../../shared/services/filters.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, FilterBarComponent, AsyncPipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.less',
})
export class BlogComponent {
  public filters$ = this.filtersService.getFiltersOfTypes$('domain');

  public article = {
    id: '123123123123',
    slug: 'john-atanasoff-will',
    title: 'Джон Атанасов ще ръководи развойния център на Computer в България',
    subtitle:
      'Джон Атанасов е доказан професионалист с богат опит на висши ръководни позиции',
    image: '/assets/blog.png',
    createdAt: new Date(),
    category: 'it',
  };

  public articles = new Array(16).fill(this.article);

  constructor(private filtersService: FiltersService) {}
}
