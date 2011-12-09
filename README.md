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