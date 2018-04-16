var RNumero;
var NTentativas;
var limite;

function Aleatorio() {
	hoje = new Date();
	num = hoje.getTime();
	num = Math.round(Math.abs(Math.sin(num) * 1000000)) % limite;
	return num;
}

function Inic() {
	limite = prompt("Qual é o número que queres que seja o máximo (inclusive)?","");
	limite = Number(limite);
	RNumero = Aleatorio();
	NTentativas = 0;
	document.FJogo.Saida.value='Estou a pensar num numero entre 0 e ' + (limite) +'. Tenta adivinhar qual é?';
	document.FJogo.Tentativas.value=NTentativas;
	document.FJogo.AltoBaixo.value='';
	document.FJogo.Entrada.value='';
}

function Jogo(Numero) {
    if (Numero > limite) {
        document.FJogo.Saida.value='O seu número tem de ser entre 0 e ' + limite + '. Por favor insira um valor aceitável.';
        document.FJogo.AltoBaixo.value='inválido';
    } else {
	    if(Numero==RNumero) {
	        NTentativas++;
		    document.FJogo.Saida.value='Acertaste em ' + NTentativas + ' tentativas! Era o número ' + RNumero + '! Clica em Recomeçar para jogar outra vez';
		    document.FJogo.AltoBaixo.value='Certoooooooooo!';
	    } else {
	        NTentativas++;
		    document.FJogo.Saida.value='Não, ' + Numero + ' não é o numero em que estou a pensar!';
		    document.FJogo.AltoBaixo.value=(RNumero > Numero) ? 'mais alto!' : 'mais baixo!';
		    document.FJogo.Tentativas.value=NTentativas;
	    }
    }
}
