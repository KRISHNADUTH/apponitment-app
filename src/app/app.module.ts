import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Step 1 - import FormsModule, it is used for bidirectional databinding.
import { AppComponent } from './app.component';
import { ApponitmentListComponent } from './appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ApponitmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    // Step-2 Mentioning FormsModule here means we are adding service of FormsModule in the components mentioned here inside the "declarations:"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
