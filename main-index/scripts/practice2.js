$(document).ready(function() {
    $('#toggleButton').click(function() {
        if ($('#image').is(':visible')) {
            
            $('#image').hide("slow");
        } else {
            
            $('#image').show("slow");
        }
    });
});

$(document).ready(function() {
    $('.FAQ p').hide();

    $('.FAQ h3').click(function() {
        $(this).next('p').slideToggle("slow");
    });
});

$(document).ready(function(){
    $('#darkMode').click(function(){
        $('body').toggleClass('dark-mode');
    })
});
