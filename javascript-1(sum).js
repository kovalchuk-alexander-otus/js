var sum = (function(){
	var ret = 0;
	return function(n) { return n == undefined ? ret : ret += n; }
})();
