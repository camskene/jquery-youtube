(function($){
    
    $.fn.youtube = function(options) {
        
        var defaults = {
            iframe: true,
            videoID: "",
            width: "480",
            height: "390",
            play: "0",
            loop: "0",
            link: "external",
            controls: "1",
            autohide: "1"
        };
        
        var o = $.extend(defaults, options);
        var videoDIV = "yt-" + o.videoID;
        var height;
        
        if(o.autohide === "1") {
            height = o.height - 30;
        }
        
        if(o.autohide === "0") {
            height = o.height;
        }
        
        if( (o.autohide === "0") && (o.iframe === false) ) {
            height = o.height - 5;
        }
                                
        return this.each(function() {
            
            if (o.iframe === true) {
                $(this).html('<iframe id="'+videoDIV+'" width="'+o.width+'" height="'+height+'" src="http://www.youtube.com/embed/' + o.videoID + '?enablejsapi=1&amp;version=3&amp;wmode=transparent&amp;rel=0&amp;autohide='+o.autohide+'&amp;showinfo=0&amp;controls='+o.controls+'&amp;autoplay='+o.play+'" frameborder="0" allowfullscreen></iframe>');
            }
                
            if (o.iframe === false) {
                $(this).html('<div id="' + videoDIV + '">')

                var flashvars = {
                    hd: "1",
                    fs: "1",
                    fmt: "18",
                    egm: "0",
                    loop: o.loop,
                    autoplay: o.play,
                    showinfo: "0",
                    autohide: o.autohide,
                    showsearch: "0",
                    enablejsapi: "1",
                    playerapiid: this.id,
                    wmode: "transparent"
                };
                var params = {
                    wmode: "transparent",
                    allowscriptaccess: "always",
                    allowfullscreen: "true",
                    allownetworking: o.link
                };
                var attributes = {
                    id: videoDIV,
                    name: videoDIV
                };
                // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
                swfobject.embedSWF("http://www.youtube.com/v/" + o.videoID +"&rel=0&version=1", videoDIV, o.width, height, "8", false, flashvars, params, attributes);            
            }
        })       
    };
}) (jQuery);