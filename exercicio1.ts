// Classe base Funcionario
class Funcionario {
    protected nome: string;
    protected salario: number;
    protected cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    calcularVencimentos(): number {
        return this.salario;
    }
}

// Classe FuncionarioEfetivo (herda de Funcionario)
class FuncionarioEfetivo extends Funcionario {
    private bonusAnual: number;

    constructor(nome: string, salario: number, cargo: string, bonusAnual: number) {
        super(nome, salario, cargo);
        this.bonusAnual = bonusAnual;
    }

    calcularVencimentos(): number {
        return this.salario + this.bonusAnual;
    }
}

// Classe FuncionarioTerceirizado (herda de Funcionario)
class FuncionarioTerceirizado extends Funcionario {
    private custoPorProjeto: number;

    constructor(nome: string, salario: number, cargo: string, custoPorProjeto: number) {
        super(nome, salario, cargo);
        this.custoPorProjeto = custoPorProjeto;
    }

    calcularVencimentos(): number {
        return this.salario + this.custoPorProjeto;
    }
}

// Testando as classes
const funcionario1 = new FuncionarioEfetivo("João", 5000, "Desenvolvedor", 2000);
console.log(`Vencimentos de ${funcionario1["nome"]}: R$ ${funcionario1.calcularVencimentos()}`);

const funcionario2 = new FuncionarioTerceirizado("Maria", 4000, "Analista", 1500);
console.log(`Vencimentos de ${funcionario2["nome"]}: R$ ${funcionario2.calcularVencimentos()}`);