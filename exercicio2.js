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
// Classe base Veiculo
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo, capacidade) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }
    Veiculo.prototype.calcularConsumo = function (distancia, passageiros) {
        return 0; // Método genérico para ser sobrescrito
    };
    return Veiculo;
}());
// Classe Ônibus (herda de Veiculo)
var Onibus = /** @class */ (function (_super) {
    __extends(Onibus, _super);
    function Onibus(modelo, capacidade, consumoPorKm) {
        var _this = _super.call(this, modelo, capacidade) || this;
        _this.consumoPorKm = consumoPorKm;
        return _this;
    }
    Onibus.prototype.calcularConsumo = function (distancia) {
        return this.consumoPorKm * distancia;
    };
    return Onibus;
}(Veiculo));
// Classe Táxi (herda de Veiculo)
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(modelo, capacidade, taxaPorPassageiro) {
        var _this = _super.call(this, modelo, capacidade) || this;
        _this.taxaPorPassageiro = taxaPorPassageiro;
        return _this;
    }
    Taxi.prototype.calcularConsumo = function (distancia, passageiros) {
        if (passageiros === void 0) { passageiros = 1; }
        return this.taxaPorPassageiro * passageiros * distancia;
    };
    return Taxi;
}(Veiculo));
// Testando as classes
var onibus = new Onibus("Ônibus Urbano", 40, 0.5);
console.log("Consumo do \u00F4nibus para 100km: ".concat(onibus.calcularConsumo(100), " litros"));
var taxi = new Taxi("Táxi Sedan", 4, 0.2);
console.log("Consumo do t\u00E1xi para 50km com 3 passageiros: ".concat(taxi.calcularConsumo(50, 3), " litros"));
