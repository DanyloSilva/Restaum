$(document).ready(function() {
  tabuleiro_jogo();
});
var tabuleiro = [];
var quant_pont = 0;

var tabuleiro_jogo = function() {
  tabuleiro[13] = 'p';
  tabuleiro[14] = 'p';
  tabuleiro[15] = 'p';
  tabuleiro[23] = 'p';
  tabuleiro[24] = 'p';
  tabuleiro[25] = 'p';
  tabuleiro[31] = 'p';
  tabuleiro[32] = 'p';
  tabuleiro[33] = 'p';
  tabuleiro[34] = 'p';
  tabuleiro[35] = 'p';
  tabuleiro[36] = 'p';
  tabuleiro[37] = 'p';
  tabuleiro[41] = 'p';
  tabuleiro[42] = 'p';
  tabuleiro[43] = 'p';
  tabuleiro[44] = '';
  tabuleiro[45] = 'p';
  tabuleiro[46] = 'p';
  tabuleiro[47] = 'p';
  tabuleiro[51] = 'p';
  tabuleiro[52] = 'p';
  tabuleiro[53] = 'p';
  tabuleiro[54] = 'p';
  tabuleiro[55] = 'p';
  tabuleiro[56] = 'p';
  tabuleiro[57] = 'p';
  tabuleiro[63] = 'p';
  tabuleiro[64] = 'p';
  tabuleiro[65] = 'p';
  tabuleiro[73] = 'p';
  tabuleiro[74] = 'p';
  tabuleiro[75] = 'p';
}

var movimento1 = function(value) {
  opc_cima          = value - 20;
  opc_cima_pino     = value - 10;
  opc_esquerda      = value -  2;
  opc_esquerda_pino = value -  1;
  opc_baixo         = value + 20;
  opc_baixo_pino    = value + 10;
  opc_direita       = value +  2;
  opc_direita_pino  = value +  1;

  $('.opc_escolha').remove();
  if ((tabuleiro[opc_cima] == '') && (tabuleiro[opc_cima_pino] == 'p')) {
    id_opc_cima = '#c'+opc_cima;  
    $(id_opc_cima).append(
      "<div class='opc_escolha' onclick='movimento2("+value+","+opc_cima+","+opc_cima_pino+")'></div>"
    );
  }

  if ((tabuleiro[opc_esquerda] == '') && (tabuleiro[opc_esquerda_pino] == 'p')) {
    id_opc_esquerda = '#c'+opc_esquerda;  
    $(id_opc_esquerda).append(
      "<div class='opc_escolha' onclick='movimento2("+value+","+opc_esquerda+","+opc_esquerda_pino+")'></div>"
    );
  }
  
  if ((tabuleiro[opc_baixo] == '') && (tabuleiro[opc_baixo_pino] == 'p')) {
    id_opc_baixo = '#c'+opc_baixo;  
    $(id_opc_baixo).append(
      "<div class='opc_escolha' onclick='movimento2("+value+","+opc_baixo+","+opc_baixo_pino+")'></div>"
    );
  }

  if ((tabuleiro[opc_direita] == '') && (tabuleiro[opc_direita_pino] == 'p')) {
    id_opc_direita = '#c'+opc_direita;  
    $(id_opc_direita).append(
      "<div class='opc_escolha' onclick='movimento2("+value+","+opc_direita+","+opc_direita_pino+")'></div>"
    );
  }
}

var movimento2 = function(origin,destino,remover_pino) {
  var origin_id       = '#c' + origin;
  var destino_id      = '#c' + destino;
  var remover_pino_id = '#c' + remover_pino;

  $('.opc_escolha').remove();;

  
  $(origin_id).empty();
  tabuleiro[origin] = '';
  $(destino_id).empty();
  tabuleiro[destino] = 'p';
  $(destino_id).append("<div class='pino' onclick='movimento1("+destino+")'>");

  setTimeout(function(){ $('#p'+remover_pino).css('background-color', '#943b3b');}, 330);
  setTimeout(function(){ $('#p'+remover_pino).css('background-color', '#904545');}, 660);
  setTimeout(function(){ $(remover_pino_id).empty(); }, 1000);
  
  tabuleiro[remover_pino] = '';

  quant_pont = quant_pont + 1;
  $('#quant_pontos').empty();

  if (quant_pont > 1) { var plural = 's'; } else { plural = ''; }
  $('#quant_pontos').append(quant_pont + ' Ponto' + plural);

  if(quant_pont == 31) {
    alert('Parabéns! Você venceu o jogo (mas perdeu a semana santa)' );
      location.reload();
  }
}