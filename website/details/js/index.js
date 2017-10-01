var filled_star_path = "details_pictures/filled_star.jpeg";
var half_filled_star_path = "details_pictures/half_filled_star.png";
var empty_star_path = "details_pictures/empty_star.png";

var filled_star_picture = $("<img class=\"filled_star\" src="+ filled_star_path +">");

$(document).ready(function(){
  loadJavascript();
  loadJQuery();
  loadPhp();
  loadNodeJS();
  loadAndroidStudio();
  loadArduino();
  loadJava();
  loadPython();
  loadR();
  loadHtml();
  loadCss();
  loadMysql();
});

function loadJavascript(){
  clear("#javascript");
  loadStars("filled_star", 4, "#javascript");
  // loadStars("empty_star", 1, "#javascript");
}

function loadJQuery() {
  clear("#jquery");
  loadStars("filled_star", 4, "#jquery");
}

function loadPhp(){
  clear("#php");
  loadStars("filled_star", 3, "#php");
  loadStars("half_filled_star", 1, "#php");
  // loadStars("empty_star", 1, "#php");
}

function loadNodeJS(){
  clear("#nodeJS");
  loadStars("filled_star", 2, "#nodeJS");
  // loadStars("empty_star", 3, "#nodeJS");
}

function loadAndroidStudio(){
  clear("#android_studio");
  loadStars("filled_star", 3, "#android_studio");
  // loadStars("empty_star", 2, "#android_studio");
}

function loadArduino(){
  clear("#arduino");
  loadStars("filled_star", 2, "#arduino");
  loadStars("half_filled_star", 1 , "#arduino");
  // loadStars("empty_star" , 2, "#arduino");
}

function loadJava(){
  clear("#java");
  loadStars("filled_star", 4, "#java");
  loadStars("half_filled_star", 1, "#java");
}

function loadPython(){
  clear("#python");
  loadStars("filled_star", 2, "#python");
  // loadStars("empty_star", 3, "#python");
}

function loadR(){
  clear("#R");
  loadStars("filled_star", 2, "#R");
  // loadStars("empty_star", 3, "#R");
}

function loadHtml(){
  clear("#html");
  loadStars("filled_star", 3, "#html");
  loadStars("half_filled_star", 1, "#html");
  // loadStars("empty_star", 1,"#html");
}

function loadCss(){
  clear("#css");
  loadStars("filled_star", 3, "#css");
  // loadStars("empty_star", 2, "#css");
}

function loadMysql(){
  clear("#mysql");
  loadStars("filled_star", 3, "#mysql");
  loadStars("half_filled_star", 1, "#mysql");
  // loadStars("empty_star", 1, "#mysql");
}

// below are helper functions
function loadStars(type, amount, target){
  if (type == "filled_star") {
    for (var i = 0; i < amount; i++) {
      loadFilledStar(target);
    }
  }else if (type == "half_filled_star"){
    for (var i = 0; i < amount; i++) {
      loadHalfFilledStar(target);
    }
  }else{
    for (var i = 0; i < amount; i++) {
      loadEmptyStar(target);
    }
  }
}


function loadFilledStar(target) {
  $("<img class=\"filled_star\" src="+ filled_star_path +">").on('load',function(e){
    $(target).append($(this));
  });
}

function loadHalfFilledStar(target){
  $("<img class=\"half_filled_star\" src="+ half_filled_star_path +">").on('load',function(e){
    $(target).append($(this));
  });
}

function loadEmptyStar(target){
  $("<img class=\"empty_star\" src="+ empty_star_path +">").on('load',function(e){
    $(target).append($(this));
  });
}

function clear(target){
  $(target).html('');
}
