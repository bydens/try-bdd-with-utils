var Helper = Object.create(null);

Helper = {
   isArray:function (argument) {
     if(!argument || Object.prototype.toString.call(argument).toUpperCase() !== '[OBJECT ARRAY]')
      return false;
     return true;
   },

   isFunction:function (argument) {
     if(Object.prototype.toString.call(argument).toUpperCase() !== '[OBJECT FUNCTION]')
      return false;
     return true;
   },

   isObject:function (argument) {
     if(Object.prototype.toString.call(argument).toUpperCase() !== '[OBJECT OBJECT]')
      return false;
     return true;
   },
};

module.exports = Helper;