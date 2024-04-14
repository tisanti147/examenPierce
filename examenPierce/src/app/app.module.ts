import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/shared/footer/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar/navbar.component';
import { CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
