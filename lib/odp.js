// odp
var querySPARQL = function(q, callback) {
	var baseurl = "https://sparql.odp.jig.jp/api/v1/sparql";
	var url = baseurl + "?query=" + encodeURIComponent(q) + "&output=json";
	url += "&callback=" + getCallbackMethod(callback);
	jsonp(url);
};
var queryItemSPARQL = function(uri, callback) {
	querySPARQL("select * { <" + uri + "> ?p ?o }", callback);
};
