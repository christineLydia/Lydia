/*need to wait until elements are loaded and added to DOM*/
document.addEventListener('DOMContentLoaded', (event) => {
   
    const logo = document.querySelectorAll("#hi-logo path");

    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
    
    $(".navi-item").hover(function() {
        $(this).animate({ opacity: "0.7", fontSize: "28px" }, "1500");
    }, function() {
        $(this).animate({ opacity: "1", fontSize: "22px" }, "300");
    });

    $("#pitton").hover(function() {
        $(this).css("cursor", "help");
        $(".kitty-pic-large-pitton").css("filter", "grayscale(0)");
    }, function() {
        $(".kitty-pic-large-pitton").css("filter", "grayscale(70%)");
    });

    $("#dublin").hover(function() {
        $(this).css("cursor", "help");
        $(".kitty-pic-large-dublin").css("filter", "grayscale(0)");
    }, function() {
        $(".kitty-pic-large-dublin").css("filter", "grayscale(70%)");
    });

    $(".main-profile-pic").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "115px", height: "115px" }, "1500");
    }, function() {
        $(this).animate({ width: "100px", height: "100px" }, "300");
    });   

    $(".main-profile-pic").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});
