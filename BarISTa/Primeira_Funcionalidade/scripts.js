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