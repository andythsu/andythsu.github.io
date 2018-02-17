myApp.controller('skills_div_controller', ['$scope', 'toggleDisplaySkills', function($scope, toggleDisplaySkills){

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
    console.log("query text: " + query_text);
    $scope.skills_search_input = "";
  }
}]);
