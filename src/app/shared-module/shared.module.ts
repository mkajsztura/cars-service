import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent // ręczny export komponentów, po to żeby inne moduły importujace ten moduł widziały te komponenty
  ],
  declarations: [HeaderComponent]
})
export class SharedModule { }
