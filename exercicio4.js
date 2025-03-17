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
// Classe Item, representando um item do pedido
var Item = /** @class */ (function () {
    function Item(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Item;
}());
// Classe Pedido, representando um pedido de restaurante
var Pedido = /** @class */ (function () {
    function Pedido(numero) {
        this.numero = numero;
        this.itens = [];
    }
    Pedido.prototype.adicionarItem = function (item) {
        this.itens.push(item);
        console.log("Item \"".concat(item.nome, "\" adicionado ao pedido."));
    };
    Pedido.prototype.calcularTotal = function () {
        return this.itens.reduce(function (total, item) { return total + item.preco; }, 0);
    };
    return Pedido;
}());
// Classe PedidoDelivery, que adiciona a taxa de entrega ao total
var PedidoDelivery = /** @class */ (function (_super) {
    __extends(PedidoDelivery, _super);
    function PedidoDelivery(numero, taxaEntrega) {
        var _this = _super.call(this, numero) || this;
        _this.taxaEntrega = taxaEntrega;
        return _this;
    }
    PedidoDelivery.prototype.calcularTotal = function () {
        var totalBase = _super.prototype.calcularTotal.call(this);
        return totalBase + this.taxaEntrega;
    };
    return PedidoDelivery;
}(Pedido));
// Testando o sistema
var pedido1 = new Pedido(101);
pedido1.adicionarItem(new Item("Pizza", 50));
pedido1.adicionarItem(new Item("Refrigerante", 8));
console.log("Total do pedido: R$".concat(pedido1.calcularTotal().toFixed(2)));
var pedido2 = new PedidoDelivery(102, 10);
pedido2.adicionarItem(new Item("Hambúrguer", 25));
pedido2.adicionarItem(new Item("Batata Frita", 12));
console.log("Total do pedido com entrega: R$".concat(pedido2.calcularTotal().toFixed(2)));
