$(document).ready(function(){
  generateSkillsTable();
});

function generateSkillsTable(){
  java();
  javascript();
  jquery();
  php();
  mysql();
  html();
  css();
  androidstudio();
  arduino();
  nodejs();
  python();
  r();
}

function r() {
  var DOMselector = $("#R");
  var stars = {
    full_star : 2,
    half_star : 0,
    empty_star : 0
  };
  var r = new Skill(DOMselector, stars);
  r.show();
}

function python() {
  var DOMselector = $("#Python");
  var stars = {
    full_star : 2,
    half_star : 0,
    empty_star : 0
  };
  var python = new Skill(DOMselector, stars);
  python.show();
}

function nodejs() {
  var DOMselector = $("#NodeJS");
  var stars = {
    full_star : 2,
    half_star : 0,
    empty_star : 0
  };
  var nodejs = new Skill(DOMselector, stars);
  nodejs.show();
}

function arduino() {
  var DOMselector = $("#Arduino");
  var stars = {
    full_star : 2,
    half_star : 1,
    empty_star : 0
  };
  var arduino = new Skill(DOMselector, stars);
  arduino.show();
}

function androidstudio() {
  var DOMselector = $("#AndroidStudio");
  var stars = {
    full_star : 3,
    half_star : 0,
    empty_star : 0
  };
  var androidstudio = new Skill(DOMselector, stars);
  androidstudio.show();
}

function css() {
  var DOMselector = $("#CSS");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var css = new Skill(DOMselector, stars);
  css.show();
}

function html() {
  var DOMselector = $("#HTML");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var html = new Skill(DOMselector, stars);
  html.show();
}

function mysql() {
  var DOMselector = $("#MySQL");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var mysql = new Skill(DOMselector, stars);
  mysql.show();
}

function php() {
  var DOMselector = $("#PHP");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var php = new Skill(DOMselector, stars);
  php.show();
}


function java(){
  var DOMselector = $("#Java");
  var stars = {
    full_star : 4,
    half_star : 1,
    empty_star : 0
  };
  var java = new Skill(DOMselector, stars);
  java.show();
}

function javascript() {
  var DOMselector = $("#JavaScript");
  var stars = {
    full_star : 4,
    half_star : 0,
    empty_star : 0
  };
  var javascript = new Skill(DOMselector, stars);
  javascript.show();
}

function jquery() {
  var DOMselector = $("#JQuery");
  var stars = {
    full_star : 4,
    half_star : 0,
    empty_star : 0
  };
  var jquery = new Skill(DOMselector, stars);
  jquery.show();
}
