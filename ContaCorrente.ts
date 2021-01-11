export class ContaCorrente{
    public agencia: string
    private saldo: number

    constructor(){
        this.saldo = 0
    }

    depositar(valor){
        if(valor < 0){
       console.log("Operação impossível")
       return 
    }else{
        this.saldo += valor
        console.log(`Depositado R$ ${valor}`)
        console.log(`Saldo atual R$ ${this.saldo}`)
    }
}
    sacar(valor){
        if(valor > this.saldo || valor <= 0){
            console.log(`Não é possível sacar R$ ${valor}`)
            console.log(`Saldo disponível R$ ${this.saldo}`)
            return
        }else{
            this.saldo -= valor
            console.log(`Saque de R$ ${valor} efetuado com sucesso.`)
            console.log(`Saldo disponível R$ ${this.saldo}`)
        }
    }

}