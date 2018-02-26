myApp.service('toggleDisplaySkills', function(){
  var skills_table_div = $(".skills_table_div");
  this.show = function(){
    // skills_table_div.animate({'opacity': 1}, 500);
    skills_table_div.find('code').removeClass('white_color');
    skills_table_div.find('.fa-star-half').removeClass('white_color');
    skills_table_div.find('.fa-star').removeClass('white_color');
    skills_table_div.find('.fa-star-half').addClass('star_color');
    skills_table_div.find('.fa-star').addClass('star_color');
    $("#circle").removeClass('moving'); // hide the unmask circle
    skills_table_div.attr('data-visible','show');
  }
  this.hide = function(){
    // skills_table_div.animate({'opacity': 0}, 500);
    skills_table_div.find('code').addClass('white_color');
    skills_table_div.find('.fa-star-half').removeClass('star_color');
    skills_table_div.find('.fa-star').removeClass('star_color');
    skills_table_div.find('.fa-star-half').addClass('white_color');
    skills_table_div.find('.fa-star').addClass('white_color');
    skills_table_div.attr('data-visible','hide');
  }
  this.toggle = function(){
    if(skills_table_div.attr("data-visible") == "hide"){
      this.show();
      return 'show';
    }else{
      this.hide();
      return 'hide';
    }
  }
});
