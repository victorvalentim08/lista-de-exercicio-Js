document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mensagem").innerText = "O JavaScript carregou corretamente!"
})
// Questão 1
        function verificarMaior() {
            let num1 = Number(document.getElementById("num1").value)
            let num2 = Number(document.getElementById("num2").value)

            if (num1 > num2) {
                document.getElementById("resultado").innerText = "O maior número é: " + num1
            } else {
                document.getElementById("resultado").innerText = "O maior número é: " + num2
            }
        }
    // Questão 2
        function calcPotencia(){
            let num1 = Number(document.getElementById("num1").value)
            let num2 = Number(document.getElementById("num2").value)

            resultado = num1 ** num2

            document.getElementById("resultado").innerHTML = "O primeiro elevado a potencia do segundo é : "+ resultado
        }
    // Questão 3
        function fatorial(n) {
            let resultado = 1
            for (let i = n; i > 1; i--) {
                resultado *= i
            }
            return resultado;
        }
        function calcFatorial() {
            let num1 = Number(document.getElementById("num1").value)
            let num2 = Number(document.getElementById("num2").value)

            document.getElementById("resultado").innerText = "Fatorial de " + num1 + ": " + fatorial(num1) + " | Fatorial de " + num2 + ": " + fatorial(num2)
        }
    // Questão 4
        function Acric(){
            let raio = Number(document.getElementById("num1").value)
            resultado  = 2 * 3.14 * (raio**2)
            document.getElementById("resultado").innerHTML = "A área do circulo é: "+ resultado
        } 
    // Questão 5
        function npar() {
            let num1 = Number(document.getElementById("num1").value)
            let num2 = Number(document.getElementById("num2").value)
            let resultado = ""

            if (num1 % 2 === 0) {
                resultado += num1 + " é par. "
            }
            if (num2 % 2 === 0) {
                resultado += num2 + " é par. "
            }
            if (resultado === "") {
                resultado = "Nenhum dos números é par."
            }
            document.getElementById("resultado").innerHTML = resultado
        }
    // Questão 6
        function maiorNum(){
            const lista = [0,2,3,5,7,11]
            let maior = lista[0] //inicializar em zero
            for (let numero of lista) {
                if (numero > maior){
                    maior = numero
                }
            } 
        document.getElementById("resultado").innerHTML = "O maior número do array é: " + maior
        }
    // Questão 7
        function numFibonacci(){
            let n = Number(document.getElementById('num1').value)
            let Fibonacci = [0,1]
        
        for (let i=2 ; i< n  ; i++){
            Fibonacci[i] = Fibonacci[i -1] + Fibonacci[i -2]
        }
        document.getElementById("resultado").innerHTML = "A sequência é: " + Fibonacci.join(", ")
        }
    // Questão 8 
        function contarVogais() {
            let texto = document.getElementById("num1").value.toLowerCase() 
            let vogais = "aeiou"// Lista de vogais
            let contador = 0

            for (let letra of texto) {
                if (vogais.includes(letra)) { 
                    contador++
                }
            }
            document.getElementById("resultado").innerText = "Número de vogais: " + contador
        }
    // Questão 9
        function ParImpar() {
            let num1 = Number(document.getElementById("num1").value)
            let num2 = Number(document.getElementById("num2").value)
            let resultado = ""
            if (num1 % 2 === 0) {
                resultado += "O número " + num1 + " é PAR. "
            } else {
                resultado += "O número " + num1 + " é ÍMPAR. "
            }
            if (num2 % 2 === 0) {
                resultado += "O número " + num2 + " é PAR."
            } else {
                resultado += "O número " + num2 + " é ÍMPAR."
            }
            document.getElementById("resultado").innerText = resultado
        }
    // Questão 10
        function inverterString() {
            let texto = document.getElementById("num1").value
            let invertida = texto.split("").reverse().join("") // Invertendo a string

            document.getElementById("resultado").innerText = "String invertida: " + invertida
        }
    // Questão 11
        function calcNumero() {
            let num1 = Number(document.getElementById("num1").value)
            let num2 = Number(document.getElementById("num2").value)
            let operador = "+"
            let resultado
            if (operador === "+") {
                resultado = num1 + num2
            } else if (operador === "-") {
                resultado = num1 - num2
            } else if (operador === "*") {
                resultado = num1 * num2
            } else if (operador === "/") {
                resultado = num1 / num2
            } else {
                resultado = "Operador inválido"
            }
            document.getElementById("resultado").innerText = "Resultado: " + resultado
        }
    // Questão 12
        function validarCPF() {
            let cpf = document.getElementById("num1")
            if (cpf.length !== 11) {
                document.getElementById("resultado").innerText = "CPF inválido: deve conter 11 dígitos."
                return
            }
            let formato = 0
            for (let i = 0; i < 9; i++) {
                formato += cpf[i] * (10 - i)
            }

            let primeiroDigito = (formato * 10) % 11
            if (primeiroDigito === 10) primeiroDigito = 0
            formato = 0
        
            for (let i = 0; i < 10; i++) {
                formato += cpf[i] * (11 - i);
            }

            let segundoDigito = (formato * 10) % 11;
            if (segundoDigito === 10) segundoDigito = 0;
            
            if (primeiroDigito == cpf[9] && segundoDigito == cpf[10]) {
                document.getElementById("resultado").innerText = "CPF válido!";
            } else {
                document.getElementById("resultado").innerText = "CPF inválido.";
            }
        }
    // Questão 13
            let segundos = 0
            let intervalo
        function iCronometro() {
            if (!intervalo) { 
                intervalo = setInterval(function() {
                    segundos++
                    document.getElementById("cronometro").innerText = "Tempo: " + segundos + " segundos"
                }, 1000)
            }
        }
        function pausarCronometro() {
            clearInterval(intervalo)
            intervalo = null
        }
        function zerarCronometro() {
            clearInterval(intervalo)
            segundos = 0
            document.getElementById("cronometro").innerText = "Tempo: 0 segundos"
            intervalo = null
        }