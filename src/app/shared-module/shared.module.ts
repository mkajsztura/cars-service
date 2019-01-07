import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserShortcutPipe } from './pipes/user-shortcut.pipe';
import { ImportantDirective } from './directives/important-directive.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ScrollTopDirective } from './directives/scroll-top.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, // ręczny export komponentów, dyrektyw i pipów, po to żeby inne moduły importujace ten moduł widziały te komponenty
    UserShortcutPipe,
    ImportantDirective,
    PageNotFoundComponent,
    ScrollTopDirective
  ],
  declarations: [HeaderComponent, UserShortcutPipe, ImportantDirective, PageNotFoundComponent, ScrollTopDirective]
})
export class SharedModule { }
