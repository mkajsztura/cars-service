import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserShortcutPipe } from './pipes/user-shortcut.pipe';
import { ImportantDirectiveDirective } from './directives/important-directive.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, // ręczny export komponentów i pipów, po to żeby inne moduły importujace ten moduł widziały te komponenty
    UserShortcutPipe,
    ImportantDirectiveDirective
  ],
  declarations: [HeaderComponent, UserShortcutPipe, ImportantDirectiveDirective]
})
export class SharedModule { }
