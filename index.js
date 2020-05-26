    
    // TRANSPARENT NAVBAR
    
jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navbar").css("background-color","#090b0d");
        $(".disappear").css("top","0");
    } else {
        $(".navbar").css("background","none");
        $(".disappear").css("top","-200");
    }
});   

    // SMOOTH SCROLL
    
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});    
    
    // SIDE-NAV
    
function openNav() {
    document.getElementById("sidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}
    
        
    // PEOPLE SECTION SCRIPT
    
$('.people-pics img').click(function(){
    $(".people-pics img").removeClass("active");
    $(this).addClass("active");

    $(".people").removeClass("active");
    $("#"+$(this).attr("alt")).addClass("active");
})
    
$('.links span').click(function(){
    $(".links span").removeClass("active");
    $(this).addClass("active");

    $(".team-section").removeClass("active");
    $("#"+$(this).attr("alt")).addClass("active");
})
   

function auto_height(elem) {  /* javascript */
    elem.style.height = "2px";
    elem.style.height = (elem.scrollHeight)+"px";
}