import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CardItemDirective } from './card-item.directive';
import { ListItemDirective } from './list-item.directive';

@Component({
  selector: 'card-or-list-view',
  templateUrl:'card-or-list-view.html',
})
export class CardOrListViewComponent {
  @Input() items: any[] = [];

  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate;

}
