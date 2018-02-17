myApp.service('toggleDisplaySkills', function(){
  var skills_table_div = $(".skills_table_div");
  this.show = function(){
    skills_table_div.animate({'opacity':'1'}, 500);
  }
  this.hide = function(){
    skills_table_div.animate({'opacity':'0'}, 500);
  }
  this.toggle = function(){
    if(skills_table_div.css("opacity") == "0"){
      this.show();
      return 'show';
    }else{
      this.hide();
      return 'hide';
    }
  }
});
