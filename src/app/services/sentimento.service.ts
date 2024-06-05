import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentimentoService {
  constructor() { }

  getMockMessages(): Observable<{ mensagem: string, sentimento: { text: string, score: number } }[]> {
    const messages = [
      { mensagem: 'Estou muito feliz com o suporte!', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'A interface é muito amigável.', sentimento: { text: 'positivo', score: 0.8 } },
      { mensagem: 'O atendimento foi rápido e eficiente.', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'O sistema está lento hoje.', sentimento: { text: 'negativo', score: -0.8 } },
      { mensagem: 'Gostei das novas funcionalidades.', sentimento: { text: 'positivo', score: 0.7 } },
      { mensagem: 'O suporte técnico foi muito prestativo.', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'Não tive problemas até agora.', sentimento: { text: 'neutro', score: 0.5 } },
      { mensagem: 'O produto é excelente!', sentimento: { text: 'positivo', score: 1.0 } },
      { mensagem: 'Acho que o preço é justo pelo serviço oferecido.', sentimento: { text: 'positivo', score: 0.8 } },
      { mensagem: 'Estou tendo dificuldades para acessar a conta.', sentimento: { text: 'negativo', score: -0.9 } },
      { mensagem: 'O design do aplicativo é moderno e bonito.', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'A integração com outras plataformas é excelente.', sentimento: { text: 'positivo', score: 0.8 } },
      { mensagem: 'O tempo de resposta é ótimo.', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'O serviço é bastante confiável.', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'A qualidade do produto é muito boa.', sentimento: { text: 'positivo', score: 0.8 } },
      { mensagem: 'O atendimento ao cliente é normal.', sentimento: { text: 'neutro', score: 0.5 } },
      { mensagem: 'O site é fácil de usar.', sentimento: { text: 'positivo', score: 0.7 } },
      { mensagem: 'A aplicação é intuitiva.', sentimento: { text: 'positivo', score: 0.8 } },
      { mensagem: 'Gostei do novo layout.', sentimento: { text: 'positivo', score: 0.7 } },
      { mensagem: 'Estou tendo problemas de conexão.', sentimento: { text: 'negativo', score: -0.7 } },
      { mensagem: 'A documentação é clara e útil.', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'A ferramenta é bastante poderosa.', sentimento: { text: 'positivo', score: 0.8 } },
      { mensagem: 'Estou satisfeito com o serviço.', sentimento: { text: 'positivo', score: 0.8 } }
    ];
    return of(messages);
  }
}
