import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagingComponent } from './paging/paging.component';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { EditingComponent } from './editing/editing.component';
import { IgxButtonModule, IgxCheckboxModule, IgxComboModule, IgxDatePickerModule, IgxDialogModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxSelectModule, IgxToastModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PagingComponent,
    SortingComponent,
    FilteringComponent,
    EditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxSelectModule,
    FormsModule,
    FormsModule,
		IgxButtonModule,
		IgxCheckboxModule,
		IgxDatePickerModule,
		IgxDialogModule,
		IgxGridModule,
		IgxInputGroupModule,
		IgxIconModule,
		IgxRippleModule,
		IgxToastModule,
		IgxComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
