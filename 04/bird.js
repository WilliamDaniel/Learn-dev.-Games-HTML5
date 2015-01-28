

var BIRD_DIREITA = 1;
var BIRD_ESQUERDA = 2;

function Bird(context, teclado, imagem){
	this.teclado = teclado;
	this.x = 0;
	this.y = 0;
	this.velocidade = 0;

	//Criando spritesheet
	this.sheet = new Spritesheet(context, imagem, 4, 4);
	this.sheet.intervalo = 60;

	//Estado inicial
	this.direcao = BIRD_ESQUERDA;
	this.voando = false;
}

	Bird.prototype = {
		atualizar: function(){
			if(this.teclado.pressionada(SETA_DIREITA)){
				if(! this.voando || this.direcao != BIRD_DIREITA){					
					this.sheet.linha = 1;
					this.sheet.coluna = 0;
				}

				this.voando = true;
				this.direcao = BIRD_DIREITA;

				this.sheet.proximoQuadro();

				this.x += this.velocidade;
			}

			else if(this.teclado.pressionada(SETA_ESQUERDA)){
				if(! this.voando || this.direcao != BIRD_ESQUERDA){
					this.sheet.linha = 0;
					this.sheet.coluna = 0;
				}
			}
		},
		desenhar: function(){
			this.sheet.desenhar(this.x, this.y);
		}
	}