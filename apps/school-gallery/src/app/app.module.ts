// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Environment
import { environment } from '../environments/environment';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
