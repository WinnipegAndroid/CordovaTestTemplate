app.addStuff = function() {
  return [].reduce.call(arguments, function(prev, cur) {
      return prev + cur;
    });
};
