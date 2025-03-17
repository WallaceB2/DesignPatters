// Classe base Veiculo
class Veiculo {
    protected modelo: string;
    protected capacidade: number;

    constructor(modelo: string, capacidade: number) {
        this.modelo = modelo;
        this.capacidade = capacidade;
    }

    calcularConsumo(distancia: number, passageiros?: number): number {
        return 0; // Método genérico para ser sobrescrito
    }
}

// Classe Ônibus (herda de Veiculo)
class Onibus extends Veiculo {
    private consumoPorKm: number;

    constructor(modelo: string, capacidade: number, consumoPorKm: number) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distancia: number): number {
        return this.consumoPorKm * distancia;
    }
}

// Classe Táxi (herda de Veiculo)
class Taxi extends Veiculo {
    private taxaPorPassageiro: number;

    constructor(modelo: string, capacidade: number, taxaPorPassageiro: number) {
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    calcularConsumo(distancia: number, passageiros: number = 1): number {
        return this.taxaPorPassageiro * passageiros * distancia;
    }
}

// Testando as classes
const onibus = new Onibus("Ônibus Urbano", 40, 0.5);
console.log(`Consumo do ônibus para 100km: ${onibus.calcularConsumo(100)} litros`);

const taxi = new Taxi("Táxi Sedan", 4, 0.2);
console.log(`Consumo do táxi para 50km com 3 passageiros: ${taxi.calcularConsumo(50, 3)} litros`);