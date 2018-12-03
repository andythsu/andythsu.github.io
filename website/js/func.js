function goToSection(sectionId){
    $('html, body').animate({
        scrollTop: $(sectionId).offset().top
    }, 800, function(){
        // callback
    });
}