# Description
A simple jQuery plugin that will allow you to make Vimeo user requests.

# Usage

1. include jquery ( the latest )
2. include jquery.jVimeo.js
3. do something like this:
```javascript
( function( $ ) {
	$( function() {
		$.jVimeo( 'DiliBau', function( data ) {
			$.each( data, function( k, row ) {				
				$( 'div.vimeo_data' ).append(
					'<p><a href="' + row.url + '" target="_blank">' + row.title + '</a></p>';
				);
			} );
		} );
	} );
} ) ( jQuery );
```
or something like this
```javascript
( function( $ ) {
	$( function() {
		$.jVimeo( 'DiliBau', 'videos', function( data ) {
			$.each( data, function( k, row ) {				
				$( 'div.vimeo_data' ).append(
					'<p><a href="' + row.url + '" target="_blank">' + row.title + '</a></p>';
				);
			} );
		} );
	} );
} ) ( jQuery );
```
4. the function takes 2 or 3 arguments. If 2 arguments are passed they will be 1 the username and the callback or if 3, the username, the request to make and the callback
5. available user requests: ( Read more here : http://vimeo.com/api/docs/simple-api )
* info - User info for the specified user
* videos - Videos created by user
* likes - Videos the user likes
* appears_in - Videos that the user appears in
* all_videos - Videos that the user appears in and created
* subscriptions - Videos the user is subscribed to
* albums - Albums the user has created
* channels - Channels the user has created and subscribed to
* groups - Groups the user has created and joined