//Interface Click Bank

import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

// Dados do Cliente
const cliente1 = new Cliente();

cliente1.nome = "Heitor Mariotti";
cliente1.CPF = "77744422209";

// Operações da Conta Corrente do Cliente
const contaCorrenteHeitor = new ContaCorrente();

contaCorrenteHeitor.agencia = '1001'


// Execução
console.log("===== Click Bank | Apenas um clique de você =====")
console.log()
console.log(`Olá, ${cliente1.nome} | Agência: ${contaCorrenteHeitor.agencia}`)
contaCorrenteHeitor.depositar(1000)
contaCorrenteHeitor.sacar(780)


