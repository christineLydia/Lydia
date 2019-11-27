/*need to wait until elements are loaded and added to DOM*/
    $(".icon").hover(function() {
        $(this).css("cursor", "pointer");
    });

    /*
    $(".icon").click(function() {
        var navi = document.getElementById("navi-bar");
        if (navi.className === "navi-bar") {
            console.log("only navi-bar");
            navi.className += " display-menu";
        } else {
            console.log("with display-menu");
            navi.className = "navi-bar";
        }
        
        // $(this).css("transform", "translateY(12px) rotate(135deg)");

    });*/

    function menuToggle() {
        console.log("in function");
        var navi = document.getElementById("navi-bar");
        if (navi.className === "navi-bar") {
            console.log("only navi-bar");
            navi.className += " display-menu";
        } else {
            console.log("with display-menu");
            navi.className = "navi-bar";
        }
    }
   
    const logo = document.querySelectorAll("#hi-logo path");

    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }
    
    $(".navi-item").hover(function() {
        $(this).animate({ fontSize: "28px" }, "1500");
    }, function() {
        $(this).animate({ fontSize: "22px" }, "300");
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

var imageSlideIndex = 1;

/*need to wait until elements are added to DOM, then "imageSlides" class elements can be selected out by calling showSlides.*/
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(imageSlideIndex);
});

function plusSlides(x) {
    showSlides(imageSlideIndex += x);
}

function selectCurrentSlide(x) {
    showSlides(imageSlideIndex = x);
}

function showSlides(x) {
    var i;
    var slides = document.getElementsByClassName("imageSlides");

    // only execute when page is on gardener.html
    if (slides.length == 0) {
        return;
    }

    var dots = document.getElementsByClassName("select-dot");

    if (x > slides.length) {
        imageSlideIndex = 1;
    }

    if (x < 1) {
        imageSlideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[imageSlideIndex - 1].style.display = "block";
    dots[imageSlideIndex - 1].className += " active";
}
