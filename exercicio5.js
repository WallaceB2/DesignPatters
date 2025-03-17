var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe base Publicacao
var Publicacao = /** @class */ (function () {
    function Publicacao(titulo, autor, descricao) {
        this.titulo = titulo;
        this.autor = autor;
        this.descricao = descricao;
    }
    return Publicacao;
}());
// Classe Artigo (herda Publicacao)
var Artigo = /** @class */ (function (_super) {
    __extends(Artigo, _super);
    function Artigo(titulo, autor, descricao, numeroDePalavras) {
        var _this = _super.call(this, titulo, autor, descricao) || this;
        _this.numeroDePalavras = numeroDePalavras;
        return _this;
    }
    Artigo.prototype.exibirResumo = function () {
        return "Artigo: ".concat(this.titulo, " por ").concat(this.autor, ". ").concat(this.descricao, " (").concat(this.numeroDePalavras, " palavras)");
    };
    return Artigo;
}(Publicacao));
// Classe Video (herda Publicacao)
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(titulo, autor, descricao, duracao) {
        var _this = _super.call(this, titulo, autor, descricao) || this;
        _this.duracao = duracao;
        return _this;
    }
    Video.prototype.exibirResumo = function () {
        return "V\u00EDdeo: ".concat(this.titulo, " por ").concat(this.autor, ". ").concat(this.descricao, " (Dura\u00E7\u00E3o: ").concat(this.duracao, " min)");
    };
    return Video;
}(Publicacao));
// Testando as classes
var artigo1 = new Artigo("TypeScript Avançado", "João Silva", "Um artigo sobre recursos avançados do TypeScript.", 1200);
var video1 = new Video("Introdução ao React", "Maria Souza", "Um vídeo explicando os conceitos básicos do React.", 15);
console.log(artigo1.exibirResumo());
console.log(video1.exibirResumo());
