// Classe base Publicacao
abstract class Publicacao {
    protected titulo: string;
    protected autor: string;
    protected descricao: string;
  
    constructor(titulo: string, autor: string, descricao: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.descricao = descricao;
    }
  
    abstract exibirResumo(): string;
  }
  
  // Classe Artigo (herda Publicacao)
  class Artigo extends Publicacao {
    private numeroDePalavras: number;
  
    constructor(titulo: string, autor: string, descricao: string, numeroDePalavras: number) {
      super(titulo, autor, descricao);
      this.numeroDePalavras = numeroDePalavras;
    }
  
    exibirResumo(): string {
      return `Artigo: ${this.titulo} por ${this.autor}. ${this.descricao} (${this.numeroDePalavras} palavras)`;
    }
  }
  
  // Classe Video (herda Publicacao)
  class Video extends Publicacao {
    private duracao: number; // em minutos
  
    constructor(titulo: string, autor: string, descricao: string, duracao: number) {
      super(titulo, autor, descricao);
      this.duracao = duracao;
    }
  
    exibirResumo(): string {
      return `Vídeo: ${this.titulo} por ${this.autor}. ${this.descricao} (Duração: ${this.duracao} min)`;
    }
  }
  
  // Testando as classes
  const artigo1 = new Artigo("TypeScript Avançado", "João Silva", "Um artigo sobre recursos avançados do TypeScript.", 1200);
  const video1 = new Video("Introdução ao React", "Maria Souza", "Um vídeo explicando os conceitos básicos do React.", 15);
  
  console.log(artigo1.exibirResumo());
  console.log(video1.exibirResumo());

  