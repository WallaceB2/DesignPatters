class ContaBancaria {
    protected numero: string;
    protected saldo: number;
  
    constructor(numero: string, saldoInicial: number = 0) {
      this.numero = numero;
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    sacar(valor: number): boolean {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
        return true;
      } else {
        console.log("Saldo insuficiente ou valor inválido.");
        return false;
      }
    }
  
    consultarSaldo(): number {
      return this.saldo;
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    private limiteChequeEspecial: number;
  
    constructor(numero: string, saldoInicial: number, limiteChequeEspecial: number) {
      super(numero, saldoInicial);
      this.limiteChequeEspecial = limiteChequeEspecial;
    }
  
    sacar(valor: number): boolean {
      if (valor > 0 && valor <= this.saldo + this.limiteChequeEspecial) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com cheque especial!`);
        return true;
      } else {
        console.log("Saldo insuficiente, incluindo cheque especial.");
        return false;
      }
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number;
  
    constructor(numero: string, saldoInicial: number, taxaJuros: number) {
      super(numero, saldoInicial);
      this.taxaJuros = taxaJuros;
    }
  
    aplicarJuros(): void {
      const juros = this.saldo * this.taxaJuros;
      this.saldo += juros;
      console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  // Testando as classes
  const contaCorrente = new ContaCorrente("12345", 1000, 500);
  contaCorrente.depositar(200);
  contaCorrente.sacar(1500); // Usa cheque especial
  console.log("Saldo final Conta Corrente:", contaCorrente.consultarSaldo());
  
  const contaPoupanca = new ContaPoupanca("67890", 2000, 0.02);
  contaPoupanca.aplicarJuros();
  console.log("Saldo final Conta Poupança:", contaPoupanca.consultarSaldo());
  