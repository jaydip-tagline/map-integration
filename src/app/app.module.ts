import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapIntigrationComponent } from './components/map-intigration/map-intigration.component';

@NgModule({
  declarations: [AppComponent, MapIntigrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCVIDAhvtN5mAF9q2YanJTbePy0UYLiOow',
      apiKey: 'AIzaSyCVIDAhvtN5mAF9q2YanJTbePy0UYLiOow',
      libraries: ['places', 'drawing', 'geometry'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AgmCoreModule.forRoot({
//   apiKey: 'AIzaSyA5IKpQI5auBSd-ATtcDdeQUJ5uamiJeQU',
//   libraries: ['places', 'drawing', 'geometry'],
// }),
