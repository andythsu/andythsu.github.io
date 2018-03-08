myApp.controller('skills_div_controller', ['$scope', 'toggleDisplaySkills', function($scope, toggleDisplaySkills){

  $scope.skills_display_btn_text = "Mask All"; // default text on button
  $scope.skills_display_prompt_text = "display_none"; // hide the prompt text

  //when showAllSkills button is clicked
  $scope.showAllSkills = function() {
    var text = toggleDisplaySkills.toggle();
    if(text == 'show'){
      $scope.skills_display_btn_text = "Mask All";
      $scope.skills_display_prompt_text = "display_none";
    }else if (text == 'hide'){
      $scope.skills_display_btn_text = "Show All";
      $scope.skills_display_prompt_text = "display";
    }
  }
}]);

myApp.controller('skills_table_div_controller', ['$scope', '$sce', 'skillFactory', 'PriorityQueue', function($scope, $sce, skillFactory, PriorityQueue){
  // priority queue
  var pq = new PriorityQueue();
  pq.setComparator(function(a,b){
    // descending order
    if((b.full_star*2 + b.half_star) - (a.full_star*2 + a.half_star) > 0){
      return 1;
    }else if ((b.full_star*2 + b.half_star) - (a.full_star*2 + a.half_star) < 0){
      return -1;
    }else{
      // sort on name if stars are the same
      if(b.skill_name > a.skill_name){
        return -1;
      }else if (b.skill_name < a.skill_name){
        return 1;
      }else{
        return 0;
      }
    }
  });
  /////////////////

  var skill_name = "java";
  var display_name = "Java";
  var star = {
    full_star : 4,
    half_star : 1,
    empty_star : 0
  };
  var java = new skillFactory(skill_name, display_name, star);
  pq.enqueue(java);

  var skill_name = "javascript";
  var display_name = "Javascript";
  var stars = {
    full_star : 4,
    half_star : 0,
    empty_star : 0
  };
  var javascript = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(javascript);


  var skill_name = "jquery";
  var display_name = "JQuery";
  var stars = {
    full_star : 4,
    half_star : 0,
    empty_star : 0
  };
  var jquery = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(jquery);


  var skill_name = "php";
  var display_name = "PHP";
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var php = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(php);


  var skill_name = "mysql";
  var display_name = "MySQL";
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var mysql = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(mysql);


  var skill_name = "html";
  var display_name = "HTML";
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var html = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(html);

  var skill_name = "css";
  var display_name = "CSS";
  var stars = {
    full_star : 3,
    half_star : 1,
    empty_star : 0
  };
  var css = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(css);

  var skill_name = "androidstudio";
  var display_name = "Android Studio";
  var stars = {
    full_star : 3,
    half_star : 0,
    empty_star : 0
  };
  var androidstudio = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(androidstudio);


  var skill_name = "arduino";
  var display_name = "Arduino";
  var stars = {
    full_star : 2,
    half_star : 1,
    empty_star : 0
  };
  var arduino = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(arduino);

  var skill_name = "nodejs";
  var display_name = "NodeJS";
  var stars = {
    full_star : 1,
    half_star : 1,
    empty_star : 0
  };
  var nodejs = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(nodejs);

  var skill_name = "python";
  var display_name = "Python";
  var stars = {
    full_star : 1,
    half_star :1,
    empty_star : 0
  };
  var python = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(python);

  var skill_name = "r";
  var display_name = "R";
  var stars = {
    full_star : 1,
    half_star : 1,
    empty_star : 0
  };
  var r = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(r);

  var skill_name = "angularjs";
  var display_name = "AngularJS";
  var stars = {
    full_star : 1,
    half_star : 0,
    empty_star : 0
  };
  var angularjs = new skillFactory(skill_name, display_name, stars);
  pq.enqueue(angularjs);

  $scope.skill_table = $sce.trustAsHtml(createSkillTable(pq));
}]);

function createSkillTable(pq){
  var elem = '';
  var arr_counter = 0;
  var skills = pq.getArray();
  var thead = $('<thead></thead>');
  var tbody = $('<tbody></tbody>');
  thead.append(tbody);
  for (var i = 0; i < skills.length/3; i++) {
    var row = i==0 ? $(`<tr style="border-top: hidden"></tr>`) : $(`<tr></tr>`);
    tbody.append(row);
    for (var j = 0; j < 3; j++) {
      var cell_val = skills[arr_counter] ? skills[arr_counter] : {skill_name : '', display_name : ''};
      var col = $(`<td id="`+cell_val.skill_name+`"></td>`);
      row.append(col);
      var code = $(`<code style="padding-right: 5px">`+cell_val.display_name+`</code>`);
      col.append(code);
      if(skills[arr_counter]){
        skills[arr_counter].setDOMSelector(col);
        skills[arr_counter].appendStar();
      }
      arr_counter++;
    }
  }
  return thead.html();
}
