myApp.service('allSkills', [function(){
  var skills_array = [];
  this.add = function(skill){
    array.push(skill);
  }
  this.getArray = function(){
    return skills_array;
  }
}]);
