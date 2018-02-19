myApp.service('toggleDisplaySkills', function(){
  var skills_table_div = $(".skills_table_div");
  this.show = function(){
    // skills_table_div.css('visibility', 'visible');
    skills_table_div.css({opacity: 1.0, visibility: "visible"}).animate({opacity: 1}, 500);
  }
  this.hide = function(){
    // skills_table_div.css('visibility', 'hidden');
    skills_table_div.css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 0}, 500);
  }
  this.toggle = function(){
    if(skills_table_div.css("visibility") == "hidden"){
      this.show();
      return 'show';
    }else{
      this.hide();
      return 'hide';
    }
  }
});

myApp.service('skillsService', function(){
  var allSkillsObj = [];
  var allSkillsName = []; // only store obj name
  return{
    getAllSkills : function(){
      return allSkillsObj;
    },
    addSkill : function(skill){
      allSkillsObj.push(skill);
      allSkillsName.push(angular.lowercase(skill['skill_name']));
    },
    search : function(query_text){
      query_text = query_text.replace(/[\s]/g, ''); // trim all white spaces
      query_text = angular.lowercase(query_text);
      return {
        'index' : allSkillsName.indexOf(query_text),
        'skill_obj' : allSkillsName.indexOf(query_text) >= 0 ? allSkillsObj[allSkillsName.indexOf(query_text)] : null
      }
    }
  };
});
