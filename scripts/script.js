function highlightNav() {
    var url = window.location.pathname;
    var paths = url.split("/");
    var location = paths[paths.length-1];
    var navs = $("ul.nav a");
    for(var i = 0; i < navs.length; i++){
        var nav = navs[i];
        if(nav.attr("href") == location){
            $(nav).css("background-color","#2182e9");
        }
    }
}

$(document).ready(function () {
   highlightNav();
})