var global = window || GLOBAL;

global.bruhdash = {

  // returns the first element of an array
  first: function(arr){
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[2];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
    return arr.indexOf(val);
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (arr, val) {
    return arr.lastIndexOf(val);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    return arr.filter(Number);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    return arr.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
    if(num === undefined){
      num = 1;
    }
    return arr.slice(num);
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    if(num === undefined){
      arr.pop();
      return arr;
    } else if(num === 0){
      return arr;
    } else {
      return arr.reverse(num).slice(num).reverse(num);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    if(num === 0){
      var blankArr = [];
      return blankArr;
    } else if(num >= arr.length){
      return arr;
    } else if(num === undefined){
      var newArr = [];
      newArr.push(arr[0]);
      return newArr;
    } else {
      return arr.splice(0, num);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, num) {
    // console.log(num);
    if(num === 0){
      var blankArr = [];
      return blankArr;
    } else if(num === undefined){
      var emptyArr = [];
      var newArr = arr.pop();
      emptyArr.push(newArr);
      return emptyArr;
    } else {
      return arr.splice(2, num);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
      return arr.fill(val, start, end);
  },

  // removes all given values from an array
  pull: function (arr, val) {
    for(var i = val.length - 1; i >= 0; i--){
      arr.splice(val[i], 1);
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, val) {
    for(var i = val.length - 1; i >= 0; i--){
      arr.splice(val[i], 1);
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr, val) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== val[0] && arr[i] !== val[1]){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        newArr.push(arr1[i]);
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      var emptyArr = [];
      for(var j = 0; j < arguments.length; j++)
        emptyArr.push(arguments[j][i]);
        newArr.push(emptyArr);
    }
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var newArr = [];
    for(var i = 0; i < arr[0].length; i++){
      var emptyArr = [];
      for(var j = 0; j < arr.length; j++)
        emptyArr.push(arr[j][i]);
        newArr.push(emptyArr);
    }
    return newArr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    // console.log(arr);
    // console.log(size);
    if(size === 0){
      var emptyArr = [];
      return [];
    }
    var newArr = [];
    for(var i = 0; i < arr.length; i+= size){
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(arr, func) {
    for(var key in arr){
      func(arr[key]);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(arr, func) {
    var newArr = [];
    for(var key in arr){
      newArr.push(func(arr[key]));
    }
    return newArr;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};

