(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('#icon-search').on('click', function(){
    	$('#glyphicon-remove').toggle();
    	$('#search-form').toggle();
    });
  });

})(jQuery, window, document);
