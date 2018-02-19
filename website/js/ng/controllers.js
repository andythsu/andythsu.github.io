myApp.controller('skills_div_controller', ['$scope', 'toggleDisplaySkills','skillsService', function($scope, toggleDisplaySkills,skillsService){

  $scope.skills_display_btn_text = "Show All"; // default text on button

  //when showAllSkills button is clicked
  $scope.showAllSkills = function() {
    var text = toggleDisplaySkills.toggle();
    if(text == 'show'){
      $scope.skills_display_btn_text = "Hide All";
    }else if (text == 'hide'){
      $scope.skills_display_btn_text = "Show All";
    }
  }
  // when search button is clicked
  $scope.search = function(){
    var query_text = $scope.skills_search_input;
    $scope.skills_search_input = "";
    if (query_text !== undefined && query_text != null) {
      var search_result = skillsService.search(query_text);
      if ( search_result['index'] >= 0){
        // found
        var skill_obj = search_result['skill_obj'];
        skill_obj.show();
      }else{
        // not found
        console.log("not found");
      }
    }else{
      console.log("enter value");
    }
  }
}]);










myApp.controller('skills_table_div_controller', ['$scope', 'skillFactory','skillsService',function($scope, skillFactory, skillsService){
  var skill_name = "java";
  var DOMselector = $("#Java");
  var star = {
    full_star : 4,
    half_star : 1,
    empty_star : 0
  };
  var java = new skillFactory(skill_name, DOMselector, star);
  skillsService.addSkill(java);

  var skill_name = "javascript";
  var DOMselector = $("#JavaScript");
  var stars = {
    full_star : 4,
    half_star : 0,
    empty_star : 0
  };
  var javascript = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(javascript);

  var skill_name = "jquery";
  var DOMselector = $("#JQuery");
  var stars = {
    full_star : 4,
    half_star : 0,
    empty_star : 0
  };
  var jquery = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(jquery);

  var skill_name = "php";
  var DOMselector = $("#PHP");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var php = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(php);

  var skill_name = "mysql";
  var DOMselector = $("#MySQL");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var mysql = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(mysql);

  var skill_name = "html";
  var DOMselector = $("#HTML");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var html = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(html);

  var skill_name = "css";
  var DOMselector = $("#CSS");
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var css = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(css);

  var skill_name = "androidstudio"
  var DOMselector = $("#AndroidStudio");
  var stars = {
    full_star : 3,
    half_star : 0,
    empty_star : 0
  };
  var androidstudio = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(androidstudio);


  var skill_name = "arduino";
  var DOMselector = $("#Arduino");
  var stars = {
    full_star : 2,
    half_star : 1,
    empty_star : 0
  };
  var arduino = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(arduino);

  var skill_name = "nodejs";
  var DOMselector = $("#NodeJS");
  var stars = {
    full_star : 1,
    half_star : 1,
    empty_star : 0
  };
  var nodejs = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(nodejs);

  var skill_name = "python";
  var DOMselector = $("#Python");
  var stars = {
    full_star : 1,
    half_star :1,
    empty_star : 0
  };
  var python = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(python);

  var skill_name = "r";
  var DOMselector = $("#R");
  var stars = {
    full_star : 1,
    half_star : 1,
    empty_star : 0
  };
  var r = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(r);

  var skill_name = "angularjs";
  var DOMselector = $("#AngularJS");
  var stars = {
    full_star : 1,
    half_star : 0,
    empty_star : 0
  };
  var angularjs = new skillFactory(skill_name, DOMselector, stars);
  skillsService.addSkill(angularjs);

}]);
