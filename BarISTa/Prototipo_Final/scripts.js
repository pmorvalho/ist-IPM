var perc = 0;

function updateProgress(percentage) {
	$('.pbar_innerdiv').css("width", percentage + "%");
}

function animateUpdate(item) {
	perc++;
	updateProgress(perc);
	if(perc < 100) {
		setTimeout(function() { animateUpdate(item) }, 50);
	}
	else{
		$(item).fadeOut( 700 );
	}
}

function animateUpdate_com_sugest(item) {
	perc++;
	updateProgress(perc);
	if(perc < 100) {
		setTimeout(function() { animateUpdate_com_sugest(item) }, 50);
	}
	else{
		$(item).fadeOut( 700 );
		$( ".popup_sugestao_musica" ).fadeIn( 700 );
	}
}

var song_next = " ";
var user_choice = false;

function addSong(obj,song){
  var allAddBts = document.getElementsByClassName('add_songs');
  var bt;
  if (obj.src.match("imagens_gerais/remove")) {
      obj.src = "imagens_gerais/plus.png";
      document.getElementById('user_song_box').style.display="none";
  }
  else {
      for (bt in allAddBts) {
	       allAddBts[bt].src = "imagens_gerais/plus.png";
      }
      song_next = song;
      document.getElementById('user_song_box').style.display="block";
      obj.src = "imagens_gerais/remove.png";
      document.getElementById("user_song").textContent=song;
  }
}

var total_price = 0.00;
var products = [];
var products_x = [];

function fazCenas() {
  alert("Confirmar pedido");
}

function remover_prod(el_id,produto_i,preco) {
  products_x[produto_i]--;
  var prod = document.getElementById("MEGA_"+products[produto_i]);
  if (products_x[produto_i] == 0) {
    el_id.style.display = "none";
  }
  prod.textContent = products_x[produto_i] + " " + products[produto_i];
  total_price -= preco;
  if (total_price <= 0){
    document.getElementById("preco_TOTAL").textContent="0.00€";
    var bot_pedir = document.getElementById("PEDIR");
    bot_pedir.disabled = true;
    bot_pedir.style.color = "#419CBD";
  }
  else
    document.getElementById("preco_TOTAL").textContent=total_price.toFixed(2) + "€";
}

function add_product(produto,preco){
  var bot_pedir = document.getElementById("PEDIR");
  if(bot_pedir.disabled == true) {
    bot_pedir.disabled = false;
    bot_pedir.style.color = "White";
  }
  var section = document.getElementById('resumo');
  var index = products.indexOf(produto);
  if (index == -1){
    products.push(produto);
    products_x.push(1);
    var newProd = document.createElement("div");
    var remover = document.createElement("img");
    var nomeProd = document.createElement("span");
    nomeProd.textContent = "1 " + produto;
    newProd.className = "item_resumo";
    var newProd_id = "id_MEGA_" + produto;
    newProd.id = newProd_id;
    nomeProd.id = "MEGA_" + produto;
    remover.src = "imagens_gerais/remove.png";
    remover.className = "remove_pedido";
    remover.setAttribute( "onClick", "javascript: remover_prod("+newProd_id+","+products.indexOf(produto)+","+preco+");" );
    newProd.appendChild(nomeProd);
    newProd.appendChild(remover);
    section.appendChild(newProd);
  }
  else{
    var prod = document.getElementById("MEGA_"+produto);
    document.getElementById("id_MEGA_"+produto).style.display = "block";
    products_x[index]++;
    prod.textContent = products_x[index] + " " + produto;
  }
  total_price += preco;
  document.getElementById("preco_TOTAL").textContent=total_price.toFixed(2) + "€";
}

function rem_user_song() {
  var allAddBts = document.getElementsByClassName('add_songs');
  document.getElementById('user_song_box').style.display="none";
  for (bt in allAddBts) {
    allAddBts[bt].src = "imagens_gerais/plus.png";
  }
}

function changeGenre(genre){
  var allGs = document.getElementsByClassName('head_browse');
  for (i=0;i<11;i++) {
    allGs[i].style.display="none";
  }
  document.getElementById(genre).style.display="block";
}

function changeFood(food){
  var allGs = document.getElementsByClassName('head_pedidos_food');
  for (i=0;i<5;i++) {
    allGs[i].style.display="none";
  }
  document.getElementById(food).style.display="block";
}

function changeDrink(drink){
  var allGs = document.getElementsByClassName('head_pedidos_drink');
  for (i=0;i<7;i++) {
    allGs[i].style.display="none";
  }
  document.getElementById(drink).style.display="block";
}

function toggleVisible(id) {
  var section = document.getElementById(id);
  if(section.style.display == "none"){
    section.style.display = "block";
    section.style.opacity = "1";
    var wid = document.getElementById('mesa').offsetWidth - 20;
    var hei = document.getElementById('mesa').offsetHeight - 160;
    document.getElementById('container').style.width = String(wid) + "px";
    document.getElementById('container').style.height = String(hei) + "px";
  }
  else {
    section.style.display = "none";
  }
}

function toggleHighlight (id1,id2,id3,id4) {
  document.getElementById(id1).style.backgroundColor = "#F0FFFF";
  document.getElementById(id2).style.display = "block";
  document.getElementById(id3).style.backgroundColor = "#419CBD";
  document.getElementById(id4).style.display = "none";
}

function toggleGeneros(id1,id2) {
  document.getElementById(id1).style.display = "block";
  document.getElementById(id2).style.display = "none";
}

function toggleFood(id1,id2) {
  document.getElementById(id1).style.display = "block";
  document.getElementById(id2).style.display = "none";
}

var copoVazio = false;
var querMaco=true;
var querTelemovel=true;

function encherCopo() {
  copoVazio = false;
}

function esvaziarCopo() {
  copoVazio = true;
  document.getElementById('copo_layer').style.backgroundImage = 'url("corpos/empty_glass.png")';
}

function tratarMaco() {
  querMaco=false;
}

function tratarTlm() {
  querTelemovel=false;
}

function copo(id,id1,id2) {
  var section = document.getElementById(id);
  var sectionL = document.getElementById(id1);
  var sectionR = document.getElementById(id2);
  if (copoVazio == true) {
    if(section.offsetLeft > (document.getElementById('mesa').offsetWidth / 2)){
      sectionL.style.display = "block";
      sectionR.style.display = "none";
    }
    else{
      sectionR.style.display = "block";
      sectionL.style.display = "none";
    }
  }
}

function maco(id,id1,id2) {
  var section = document.getElementById(id);
  var sectionL = document.getElementById(id1);
  var sectionR = document.getElementById(id2);
  if (querMaco == true) {
    if(section.offsetLeft > (document.getElementById('mesa').offsetWidth / 2)){
      sectionL.style.display = "block";
      sectionR.style.display = "none";
    }
    else{
      sectionR.style.display = "block";
      sectionL.style.display = "none";
    }
  }
}

function telemovel(id,id1,id2) {
  var section = document.getElementById(id);
  var sectionL = document.getElementById(id1);
  var sectionR = document.getElementById(id2);
  if (querTelemovel == true) {
    if(section.offsetLeft > (document.getElementById('mesa').offsetWidth / 2)){
      sectionL.style.display = "block";
      sectionR.style.display = "none";
    }
    else{
      sectionR.style.display = "block";
      sectionL.style.display = "none";
    }
  }
}

//eventFire('c-circle-nav__toggle', 'click');
function eventFire(el_id, etype){
  var el = document.getElementById(el_id);
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

var is_more_open = false; // false - closed; true - open

function open_close_flag() {
  if(is_more_open == false)
    is_more_open = true;
  else is_more_open = false;
}

function close_more() {
  if(is_more_open == true){
    eventFire('botao_do_more', 'click');
  }
}

var first_help = true;

function close_help() {
  if (first_help == true) {
    first_help = false;
    $( ".firstHELP" ).fadeOut( 700 );
  }
}

var is_grad_active = false;

function show_hide_grad() {
  if (is_grad_active == true) {
    is_grad_active = false;
    $( "#grad" ).fadeOut(500);
  }
  else {
    is_grad_active = true;
    $( "#grad" ).fadeIn(500);
  }
}

function actions_menu_button() {
  close_more();
  close_help();
}


function bring_to_front(id,id2) {
  var front = document.getElementById(id);
  var back = document.getElementById(id2);
  front.style.zIndex=500;
  back.style.zIndex=400;
}

function doIT() {
    $( ".popup_ajuda" ).fadeIn( 700 );
}
