/**
 * ..последовательный вызов функции
 * sum()
 * sum()
 * sum()
 */
var sum = (function(){
	var ret = 0;
	return function(n) { return n == undefined ? ret : ret += n; }
})();

/**
 * ..вызов функции в одну строку - возвращает, либо себя, либо результат суммирования
 * sum()()()()()()()
 */
var sum = (function(){
	var ret = 0;
	var f = function (n){
		if (n==undefined){
			return ret;
        }else{
			ret+=n;
			return f
		};};
	return f;
})()
