import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CardsComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
