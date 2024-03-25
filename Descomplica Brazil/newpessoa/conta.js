class ContaCliente {
  constructor(numeroConta, saldo, debito, credito) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.debito = debito;
    this.credito = credito;
  }
  calcularSaldoAtual() {
    return this.saldo - this.debito + this.credito; // Mover o return para cálculo do saldo
  }
  verificarSaldo() {
    const saldoAtual = this.calcularSaldoAtual();
    if (saldoAtual >= 0) {
      alert('Saldo Positivo! R$ ' + saldoAtual); // Corrigido para saldoAtual (sem this.)
    } else {
      alert('Saldo Negativo! R$ ' + saldoAtual); // Corrigido para saldoAtual (sem this.)
    }
  }
}

let numeroConta = prompt('Digite o numero da conta do cliente!'); // Corrigido o uso do prompt
let saldo = parseFloat(prompt('Digite o saldo do cliente'));
let debito = parseFloat(prompt('Digite o debito do cliente'));
let credito = parseFloat(prompt('Digite o credito do cliente'));

let conta = new ContaCliente(numeroConta, saldo, debito, credito);
conta.verificarSaldo();
