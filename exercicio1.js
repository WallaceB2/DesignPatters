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
// Classe base Funcionario
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    Funcionario.prototype.calcularVencimentos = function () {
        return this.salario;
    };
    return Funcionario;
}());
// Classe FuncionarioEfetivo (herda de Funcionario)
var FuncionarioEfetivo = /** @class */ (function (_super) {
    __extends(FuncionarioEfetivo, _super);
    function FuncionarioEfetivo(nome, salario, cargo, bonusAnual) {
        var _this = _super.call(this, nome, salario, cargo) || this;
        _this.bonusAnual = bonusAnual;
        return _this;
    }
    FuncionarioEfetivo.prototype.calcularVencimentos = function () {
        return this.salario + this.bonusAnual;
    };
    return FuncionarioEfetivo;
}(Funcionario));
// Classe FuncionarioTerceirizado (herda de Funcionario)
var FuncionarioTerceirizado = /** @class */ (function (_super) {
    __extends(FuncionarioTerceirizado, _super);
    function FuncionarioTerceirizado(nome, salario, cargo, custoPorProjeto) {
        var _this = _super.call(this, nome, salario, cargo) || this;
        _this.custoPorProjeto = custoPorProjeto;
        return _this;
    }
    FuncionarioTerceirizado.prototype.calcularVencimentos = function () {
        return this.salario + this.custoPorProjeto;
    };
    return FuncionarioTerceirizado;
}(Funcionario));
// Testando as classes
var funcionario1 = new FuncionarioEfetivo("João", 5000, "Desenvolvedor", 2000);
console.log("Vencimentos de ".concat(funcionario1["nome"], ": R$ ").concat(funcionario1.calcularVencimentos()));
var funcionario2 = new FuncionarioTerceirizado("Maria", 4000, "Analista", 1500);
console.log("Vencimentos de ".concat(funcionario2["nome"], ": R$ ").concat(funcionario2.calcularVencimentos()));
