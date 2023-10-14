import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ValuePipe } from './pipe/value-pipe.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ValuePipe
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PanelMenuModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ValuePipe
  ],
})
export class SharedModule { }
