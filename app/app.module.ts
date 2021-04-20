import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardOrListViewComponent } from './card-or-list-view/card-or-list-view.component';
import { CardItemDirective } from './card-or-list-view/card-item.directive';
import { ListItemDirective } from './card-or-list-view/list-item.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CardOrListViewComponent,
    CardItemDirective,
    ListItemDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
