var loadLocalAPI = function() {
	var apikey = "AIzaSyCfbWrf5isAqdEGdSNxa_NeUDqThEmRt8Q";
	var apiurl = "//maps.google.com/maps/api/js?key=" + apikey + "&language=" + getLanguage2();
	document.write('<' + 'script src="' + apiurl + '"' + ' type="text/javascript"><' + '/script>');
};
