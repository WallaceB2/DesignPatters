// Classe Item, representando um item do pedido
class Item {
    nome: string;
    preco: number;
  
    constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  // Classe Pedido, representando um pedido de restaurante
  class Pedido {
    protected numero: number;
    protected itens: Item[];
  
    constructor(numero: number) {
      this.numero = numero;
      this.itens = [];
    }
  
    adicionarItem(item: Item): void {
      this.itens.push(item);
      console.log(`Item "${item.nome}" adicionado ao pedido.`);
    }
  
    calcularTotal(): number {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  }
  
  // Classe PedidoDelivery, que adiciona a taxa de entrega ao total
  class PedidoDelivery extends Pedido {
    private taxaEntrega: number;
  
    constructor(numero: number, taxaEntrega: number) {
      super(numero);
      this.taxaEntrega = taxaEntrega;
    }
  
    calcularTotal(): number {
      const totalBase = super.calcularTotal();
      return totalBase + this.taxaEntrega;
    }
  }
  
  // Testando o sistema
  const pedido1 = new Pedido(101);
  pedido1.adicionarItem(new Item("Pizza", 50));
  pedido1.adicionarItem(new Item("Refrigerante", 8));
  console.log(`Total do pedido: R$${pedido1.calcularTotal().toFixed(2)}`);
  
  const pedido2 = new PedidoDelivery(102, 10);
  pedido2.adicionarItem(new Item("Hambúrguer", 25));
  pedido2.adicionarItem(new Item("Batata Frita", 12));
  console.log(`Total do pedido com entrega: R$${pedido2.calcularTotal().toFixed(2)}`);
  