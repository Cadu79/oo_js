function Veiculo() {
    this.segundosTempoAte100Km = function() {
        return 20;
    }
}

function Carro() {
    Veiculo.call(this);
    this.segundosTempoAte100Km = function() {
        return 15;
    }
}

function CarName() {
    this.CarName = function() {
    }
}