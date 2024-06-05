import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SentimentoService } from './services/sentimento.service';
import { SentimentoHistoricoComponent } from './sentimento-historico/sentimento-historico.component';

@NgModule({
  declarations: [
    AppComponent,
    SentimentoHistoricoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SentimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
