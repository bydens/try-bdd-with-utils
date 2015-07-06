module.exports = {
 
    /**
     * Sort given array by provided rule in comparator function
     * @param {Array} list
     * @param {Function} comparator
     */
 
    sort:function (list, comparator) {
      var count = list.length-1;
        for (var i = 0; i < count; i++) {
          for (var j = 0; j < count-i; j++) {
            if ((comparator && comparator(list[j], list[j + 1])) || 
                (!comparator && list[j] > list[j+1])) {
              var pos = list[j];
              list[j] = list[j + 1];
              list[j+1] = pos;
            }
          }
        }
      return(list);
    },
 
    /**
     * Make first letter of given string upper case
     * @param {String} string
     * @return {String} capitalized string
     */
 
    capitalize:function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
 
    /**
     * Camelize given string or array of string
     * @param {Array|String} sequence
     * @return {String} capitalized string
     */
 
    camelize:function (sequence) {
        function upp(str) {
            return str.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        }
        if (typeof(sequence) === "string") {
            return upp(sequence);
        } else if(Object.prototype.toString.call(sequence).toUpperCase() === '[OBJECT ARRAY]'){
            var result = [];
            for(var i = 0 ; i < sequence.length ; i++){
                result[i] = sequence[i].charAt(0).toUpperCase() + sequence[i].slice(1);;
            }
            return result;
        } else {
            return false;
        }
    },
 
    /**
     * Cut of any count of spaces from the beginning and from the end of the string
     * @param {String} str
     * @return {String}
     */
 
    trim:function (str) {
        return str.replace(/^\s+|\s+$/g, "");
    },

    /**
     * Reverses a specified list.
     * @param {Array} list - a list to be reversed, may be empty.
     * @return {Array} - the same instance of list but reverted
     */
 
    reverse:function (list) {
        var result = [];
        for (var i = 0; i < list.length; i++) {
            result.unshift(list[i]);
         }
        return result;
    },
 
    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */
 
    map:function (list, iterator) {
      var typeList = Object.prototype.toString.call(list).toUpperCase();
      switch(typeList){
          case '[OBJECT ARRAY]':
            var result = [];
            for (var i = 0; i < list.length; i++) {
              result.push(iterator(list[i]));
            }
            return result;
          case '[OBJECT OBJECT]':
            var result = {};
            for (var item in list) {
              if (list.hasOwnProperty(item)) {
                result[item] = iterator(list[item]);
              }
            }
            return result;
          default:
              return false;
      }
    },
 
    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */
 
    groupBy:function (list, iterator) {
      var result = {};
      for (var i = 0; i < list.length; i++) {
        if (result.hasOwnProperty(iterator(list[i]))) {
          result[iterator(list[i])].push(list[i]);
        } else {
          result[iterator(list[i])] = [];
          result[iterator(list[i])].push(list[i]);
        }
      }
      return result;
    },

    /**
     * Creates a version of the function that can only be called one time. 
     * Repeated calls to the modified function will have no effect. 
     * @param {Function} func - your target function
     * @return {Function} new  function which could be invoked only once
     */

    once: function(func){
      var result;
      return function() { 
        if(func) {
          result = func.apply(this, arguments);
          func = null;
        }
        return result;
      };
    }, 


    /**
     * Creates and returns a new debounced version of the passed function 
     * which will postpone its execution until after wait milliseconds 
     * have elapsed since the last time it was invoked. 
     * @param {Function} func - your target function
     * @param {Number} wait -  milliseconds have elapsed since the last time it was invoked
     * @return {Function} new debounced version of the passed function
     */

    debounce: function(func, wait){
        return;
    }
 
};