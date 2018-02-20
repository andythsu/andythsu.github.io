myApp.factory('skillFactory', [function(){
  function skillFactory(skill_name, DOMselector, star) {
    this.skill_name = skill_name;
    this.full_star = star['full_star'];
    this.half_star = star['half_star'];
    this.empty_star = star['empty_star'];
    this.DOMselector = DOMselector;
    this.appendStar();
  }

  skillFactory.prototype.show = function () {
    this.DOMselector.animate({'opacity' : 1}, 500).css('visibility', 'visible');
  };

  skillFactory.prototype.hide = function () {
    this.DOMselector.animate({'opacity' : 0}, 500).css('visibility', 'hidden');
  };

  skillFactory.prototype.appendStar = function () {
    this.appendFullStar();
    this.appendHalfStar();
    this.appendEmptyStar();
  };

  skillFactory.prototype.appendFullStar = function () {
    for(var i=0; i<this.full_star; i++){
      this.DOMselector.append(`<i class="fas fa-star star_color"></i>`);
    }
  };

  skillFactory.prototype.appendHalfStar = function () {
    for(var i=0; i<this.half_star; i++){
      this.DOMselector.append(`<i class="fas fa-star-half star_color"></i>`);
    }
  };

  skillFactory.prototype.appendEmptyStar = function () {
    for(var i=0; i<this.empty_star; i++){
      this.DOMselector.append(`<i class="far fa-star star_color"></i>`);
    }
  };

  return skillFactory;

}]);
