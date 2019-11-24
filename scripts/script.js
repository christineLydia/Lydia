/*need to wait until elements are loaded and added to DOM*/
document.addEventListener('DOMContentLoaded', (event) => {
   
    const logo = document.querySelectorAll("#hi-logo path");

    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
    //
    $(".navi-experience").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    }); 

    $(".navi-writer").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    });

/*
    $(".navi-writer").click(function() {
        console.log("In writer,");
        var iframe = $("iframe").attr('name', "iframe_display_body");
        if (iframe.length) {
            iframe.attr('src', "writer.html");
            return false;
        }
        return true;
    });
*/

    $(".navi-art-lover").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    });
    
    $(".navi-art-lover").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });    

    $(".navi-kittyMother").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
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
        $(this).animate({ width: "115px", height: "115px" }, "slow");
    }, function() {
        $(this).animate({ width: "100px", height: "100px" }, "slow");
    });   

    $(".main-profile-pic").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});
