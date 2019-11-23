/*need to wait until elements are loaded and added to DOM*/
document.addEventListener('DOMContentLoaded', (event) => {
   
    const logo = document.querySelectorAll("#hi-logo path");

    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
    //
    $(".navi-engineer").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    }); 

    $(".navi-engineer").click(function() {
        $iframe = $("#iframe_display_body");
        if ($iframe.length) {
            $iframe.attr('src', engineer.html);
            return false;
        }
        return true;
    });

    $(".navi-writer").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    });

    $(".navi-writer").click(function() {
        console.log("In writer,");
        var iframe = $("iframe").attr('name', "iframe_display_body");
        if (iframe.length) {
            iframe.attr('src', "writer.html");
            return false;
        }
        return true;
    });

    $(".navi-painter").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    });
    
    $(".navi-painter").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });    

    $(".navi-kittyMother").hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({ width: "90px", height: "90px" }, "slow");
    }, function() {
        $(this).animate({ width: "80px", height: "80px" }, "slow");
    });

    $(".navi-kittyMother").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
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
