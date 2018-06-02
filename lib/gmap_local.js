// gmap
var loadLocalAPI = function() {
	var apiurl = "https://maps.google.com/maps/api/js?language=" + getLanguage2();
	document.write('<' + 'script src="' + apiurl + '"' + ' type="text/javascript"><' + '/script>');
};
