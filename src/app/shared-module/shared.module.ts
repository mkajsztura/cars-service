import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserShortcutPipe } from './pipes/user-shortcut.pipe';
import { ImportantDirectiveDirective } from './directives/important-directive.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, // ręczny export komponentów i pipów, po to żeby inne moduły importujace ten moduł widziały te komponenty
    UserShortcutPipe,
    ImportantDirectiveDirective,
    PageNotFoundComponent
  ],
  declarations: [HeaderComponent, UserShortcutPipe, ImportantDirectiveDirective, PageNotFoundComponent]
})
export class SharedModule { }
