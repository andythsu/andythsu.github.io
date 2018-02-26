myApp.factory('PriorityQueue', [function(){
  return function(){
    this.array = [];
    this.comparatorFunc = undefined;
    this.enqueue = function(obj){
      if(this.comparatorFunc == undefined) throw ("provide comparator");
      this.array.push(obj);
      this.sort(this.comparatorFunc);
    }
    this.setComparator = function(func){
      this.comparatorFunc = func;
    }
    this.dequeue = function(){
      this.array.shift(); // remove the first element in array
    }
    this.sort = function(func){
      if(func){
        this.array.sort(func);
      }else{
        throw("provide comparator");
      }
    }
    this.peek = function(){
      return this.array[0];
    }
    this.getArray = function(){
      return this.array;
    }
  };
}]);
