function Skill(DOMselector, stars){
  this.DOMselector = DOMselector;
  this.full_star = stars['full_star'];
  this.half_star = stars['half_star'];
  this.empty_star = stars['empty_star'];
}

Skill.prototype.addFullStar = function(){
  for(var i=0; i<this.full_star; i++){
    this.DOMselector.append(`<i class="fas fa-star"></i>`);
  }

}

Skill.prototype.addHalfStar = function(){
  for(var i=0; i<this.half_star; i++){
    this.DOMselector.append(`<i class="fas fa-star-half"></i>`);
  }
}

Skill.prototype.addEmptyStar = function(){
  for(var i=0; i<this.empty_star; i++){
    this.DOMselector.append(`<i class="far fa-star"></i>`);
  }
}

Skill.prototype.show = function () {
  this.addFullStar();
  this.addHalfStar();
  this.addEmptyStar();
};
