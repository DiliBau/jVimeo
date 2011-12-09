/*
 * jVimeo 1.0 - Vimeo API jQuery Style
 *
 * Copyright (c) 2011 Radu Gribincea
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * URL:
 *   http://github.com/DiliBau/jVimeo
 */

// Array.indexOf fix in case IE blows up
if( !Array.indexOf ){
	Array.prototype.indexOf = function(obj){
		for(var i=0; i<this.length; i++){
			if(this[i]==obj){
				return i;
			}
		}
		return -1;
	}
}
(function( $ ){
    $.extend( {
        jVimeo: function() {
            var allowed = [ 'info', 'videos', 'likes', 'appears_in', 'all_videos', 'subscriptions', 'albums', 'channels', 'groups' ];
            var user = null, what = null, func = null;
            if( arguments.length == 2 ) {
                user = arguments[0];
                what = 'videos';
                func = arguments[1];
            } else if( arguments.length == 3 ) {
                user = arguments[0];
                what = arguments[1];
                func = arguments[2];
            } else {
                throw new Error( 'Unknown number of arguments' );
            }
            if( !user )
                return;
            if( allowed.indexOf( what ) == -1 )
                return;
            /**
             * Specifying ?callback=? allows us to retrieve cross-domain JSON data
             */
            var url = "http://vimeo.com/api/v2/" + user + "/" + what + ".json?callback=?";
            $.getJSON( url, function( data ){
                if( $.isFunction( func ) ) {
                    func.call( this, data );
                }
            });
        }
    } );
})( jQuery );