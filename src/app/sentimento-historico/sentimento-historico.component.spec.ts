import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SentimentoService } from '../services/sentimento.service';
import { SentimentoHistoricoComponent } from './sentimento-historico.component';

describe('SentimentoHistoricoComponent', () => {
  let component: SentimentoHistoricoComponent;
  let fixture: ComponentFixture<SentimentoHistoricoComponent>;
  let sentimentoService: jasmine.SpyObj<SentimentoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SentimentoService', ['getMockMessages']);

    await TestBed.configureTestingModule({
      declarations: [ SentimentoHistoricoComponent ],
      providers: [
        { provide: SentimentoService, useValue: spy }
      ]
    })
    .compileComponents();

    sentimentoService = TestBed.inject(SentimentoService) as jasmine.SpyObj<SentimentoService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentoHistoricoComponent);
    component = fixture.componentInstance;

    const mockMessages = [
      { mensagem: 'Estou muito feliz com o suporte!', sentimento: { text: 'positivo', score: 0.9 } },
      { mensagem: 'A experiência foi neutra.', sentimento: { text: 'neutro', score: 0.5 } },
      { mensagem: 'Estou insatisfeito com o serviço.', sentimento: { text: 'negativo', score: -0.9 } },
    ];

    sentimentoService.getMockMessages.and.returnValue(of(mockMessages));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve separar as mensagens em grupos positivo, neutro e negativo', () => {
    expect(component.positiveMessages.length).toBe(1);
    expect(component.neutralMessages.length).toBe(1);
    expect(component.negativeMessages.length).toBe(1);

    expect(component.positiveMessages[0].mensagem).toBe('Estou muito feliz com o suporte!');
    expect(component.neutralMessages[0].mensagem).toBe('A experiência foi neutra.');
    expect(component.negativeMessages[0].mensagem).toBe('Estou insatisfeito com o serviço.');
  });
});
