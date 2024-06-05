import { Component, Input, OnInit } from '@angular/core';
import { SentimentoService } from '../services/sentimento.service';

@Component({
  selector: 'app-sentimento-historico',
  templateUrl: './sentimento-historico.component.html',
  styleUrls: ['./sentimento-historico.component.scss']
})
export class SentimentoHistoricoComponent implements OnInit {
  positiveMessages: { mensagem: string, sentimento: { text: string, score: number } }[] = [];
  neutralMessages: { mensagem: string, sentimento: { text: string, score: number } }[] = [];
  negativeMessages: { mensagem: string, sentimento: { text: string, score: number } }[] = [];

  constructor(private sentimentoService: SentimentoService) { }

  ngOnInit() {
    this.sentimentoService.getMockMessages().subscribe(messages => {
      this.positiveMessages = messages.filter(msg => msg.sentimento.text === 'positivo');
      this.neutralMessages = messages.filter(msg => msg.sentimento.text === 'neutro');
      this.negativeMessages = messages.filter(msg => msg.sentimento.text === 'negativo');
    });
  }
}