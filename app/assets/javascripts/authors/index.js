$(document).ready(function(){
    $('#new-author').on('click', function() {
        $('#new-author-form').show();
        return false;
    });

    // add handler for ajax-success to #new-author-form
    $('#new-author-form').on('ajax:success', function(){
       console.log('author has been created successfully');
        $(this).hide('slow');
    });
});
