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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numero, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado com sucesso!"));
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor.toFixed(2), " realizado com sucesso!"));
            return true;
        }
        else {
            console.log("Saldo insuficiente ou valor inválido.");
            return false;
        }
    };
    ContaBancaria.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, saldoInicial, limiteChequeEspecial) {
        var _this = _super.call(this, numero, saldoInicial) || this;
        _this.limiteChequeEspecial = limiteChequeEspecial;
        return _this;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor.toFixed(2), " realizado com cheque especial!"));
            return true;
        }
        else {
            console.log("Saldo insuficiente, incluindo cheque especial.");
            return false;
        }
    };
    return ContaCorrente;
}(ContaBancaria));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, saldoInicial, taxaJuros) {
        var _this = _super.call(this, numero, saldoInicial) || this;
        _this.taxaJuros = taxaJuros;
        return _this;
    }
    ContaPoupanca.prototype.aplicarJuros = function () {
        var juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log("Juros de R$".concat(juros.toFixed(2), " aplicados. Novo saldo: R$").concat(this.saldo.toFixed(2)));
    };
    return ContaPoupanca;
}(ContaBancaria));
// Testando as classes
var contaCorrente = new ContaCorrente("12345", 1000, 500);
contaCorrente.depositar(200);
contaCorrente.sacar(1500); // Usa cheque especial
console.log("Saldo final Conta Corrente:", contaCorrente.consultarSaldo());
var contaPoupanca = new ContaPoupanca("67890", 2000, 0.02);
contaPoupanca.aplicarJuros();
console.log("Saldo final Conta Poupança:", contaPoupanca.consultarSaldo());
