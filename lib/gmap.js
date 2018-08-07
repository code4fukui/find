// gmap
var API_KEY = "AIzaSyCfbWrf5isAqdEGdSNxa_NeUDqThEmRt8Q";
var loadLocalAPI = function() {
	var apiurl = "https://maps.google.com/maps/api/js?key=" + API_KEY + "&language=" + getLanguage2();
	document.write('<' + 'script src="' + apiurl + '"' + ' type="text/javascript"><' + '/script>');
};
