/**
 * ..последовательный вызов функции
 * sumNext()
 * sumNext()
 * sumNext()
 */
var sumNext = (function(){
	var ret = 0;
	return function(n) { return n == undefined ? ret : ret += n; }
})();

/**
 * ..вызов функции в одну строку - возвращает, либо себя, либо результат суммирования
 * sumAll()()()()()()()
 */
var sumAll = (function(){
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

/**
 * ..вызов функции в одну строку - возвращает, либо себя, либо результат суммирования
 * sumAllWithClear()()()()()()()
 *
 *    * добавлен сброс агрегатора в случае нового использования функции
 *
 */
var sumAllWithClear = (function(){
	var ret = 0;
	var retVal = 0;
	var f = function (n){
		if (n===undefined){
			retVal = ret;
			ret = 0;
			return retVal;
        }else{
			ret += n;
			return f
		};};
	return f;
})()