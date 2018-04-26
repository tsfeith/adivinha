var RNumero;
var NTentativas;
var limite;

//esta função gera um número aleatório
//será depois usada para criar o valor que o utilizador tem de advinhar
function Aleatorio() {
    
   	//como a função getTime() dá o número de milissegundos desde 1 de janeiro de 1970, de cada vez que se corre o valor será diferente
  	//e assim o número aleatório será diferente e difícil de prever
	hoje = new Date();
	num = hoje.getTime();
	num = Math.ceil(Math.abs(Math.sin(num) * 1000000)) % limite;
	return num;
	
}


function Inic() {
    	//o limite é perguntado aqui para que não seja necessário fazer refresh para página
    	//sempre que se quer usar um limite novo, basta clicar no botão de 'Iniciar'
	limite = prompt("Qual é o número que queres que seja o máximo (inclusive)?","");
	
	//assim garantimos que o valor dado é tornado num número
	limite = Number(limite);
	
	//esta linha extrai o valor do limite para que possa ser usado por qualquer
	//função da janela, alterando assim o seu scope
	window.limite = limte;
	RNumero = Aleatorio();
	NTentativas = 0;
	document.FJogo.Saida.value='Estou a pensar num numero entre 1 e ' + (limite) +'. Tenta adivinhar qual é?';
	document.FJogo.Tentativas.value=NTentativas;
	document.FJogo.AltoBaixo.value='';
	document.FJogo.Entrada.value='';
}

function Jogo(Numero) {
    
    	//o bloco if abaixo garante que o utilizador dá um número no intervalo de jogo
    	//obrigando-o a repetir caso dê um valor maior que 'limite'
	if (0 > Numero > limite) {
        	document.FJogo.Saida.value='O seu número tem de ser entre 1 e ' + limite + '. Por favor insira um valor aceitável.';
        	document.FJogo.AltoBaixo.value='inválido';
    
    	} else {
        
        	//se o utilizador acertar no número aleatório gerado, corre este bloco...
	    	if(Numero==RNumero) {
	        	NTentativas++;
			document.FJogo.Saida.value='Acertaste em ' + NTentativas + ' tentativas! Era o número ' + RNumero + '! Clica em Recomeçar para jogar outra vez';
			document.FJogo.AltoBaixo.value='Certoooooooooo!';
		
		//...se não, corre este
	    	} else {
	        	NTentativas++;
			document.FJogo.Saida.value='Não, ' + Numero + ' não é o numero em que estou a pensar!';
			document.FJogo.AltoBaixo.value=(RNumero > Numero) ? 'mais alto!' : 'mais baixo!';
			document.FJogo.Tentativas.value=NTentativas;
	    	}
    	}
}
