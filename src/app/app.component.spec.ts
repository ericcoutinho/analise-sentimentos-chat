import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SentimentoHistoricoComponent } from './sentimento-historico/sentimento-historico.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SentimentoHistoricoComponent
      ],
      providers: [
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`deve ter o titulo 'analise-sentimentos-chat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('analise-sentimentos-chat');
  });

  it('deve renderizar SentimentoHistoricoComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-sentimento-historico')).not.toBeNull();
  });
});
